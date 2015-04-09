ParksNRecs.Views.ReviewForm = Backbone.View.extend({
  template: JST['reviews/form'],
  events: {
    'click button': 'submit',
    'click i': 'setStars',
    'onmouseover i': 'changeColors'
  },

  initialize: function() {
    this.collection = this.model.reviews;
    this.listenTo(this.model, 'sync', this.render)
  },

  setStars: function (event) {
    debugger
    $currentTarget = $(event.currentTarget)
    // had to reverse CSS because can't select preceding children
    var score = 5 - $currentTarget.index();
    var parent = $currentTarget.parent()
    var stars = parent.children()
    parent.attr('data-score', score)
    stars.each(function (index, element) {
      if(index <= score) {
        element.addClass()
      }
    })
  },

  changeColors: function (event) {
    debugger
    $currentTarget = $(event.currentTarget)
    var score = 5 - $currentTarget.index();
    var parent = $currentTarget.parent()
    var stars = parent.children()
    parent.attr('data-score', score)
    stars.each(function (index, element) {

      if(index <= score) {
        $(element).removeClass('fa-star-o')
        $(element).addClass('fa-star')
      }
    })

  },

  submit: function(event) {
    event.preventDefault();
    var that = this;
    var attrs = this.$el.serializeJSON();
    var newReview = new ParksNRecs.Models.Review();

    this.newReview.set(attrs);
    this.newReview.save({}, {
      success: function(){
        that.collection.add(that.newReview, {merge: true});
        Backbone.history.navigate("/", {trigger: true});
      },
    });
  },

  render: function(){
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }

});
