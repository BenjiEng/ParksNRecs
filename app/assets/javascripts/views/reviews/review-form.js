ParksNRecs.Views.ReviewForm = Backbone.View.extend({
  template: JST['reviews/form'],
  events: {
    'click button': 'submit',
    'click span': 'setStars'
  },

  initialize: function() {
    this.collection = this.model.reviews;
    this.listenTo(this.model, 'sync', this.render)
  },

  setStars: function (event) {
    var $currentTarget = $(event.currentTarget);
    var score = 5 - $currentTarget.index()
    var parent = $currentTarget.parent();
    var children = parent.children();
    children.each(function (index, element) {
      var correctIndex = 5 - index;
      if(correctIndex <= score){
        $(element).removeClass('empty-star');
        $(element).addClass('full-star');
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
