ParksNRecs.Views.ReviewForm = Backbone.View.extend({
  template: JST['reviews/form'],
  events: {
    'click button': 'submit',
    'click span': 'setStars'
  },

  initialize: function() {
    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render)
  },

  setStars: function (event) {
    var $currentTarget = $(event.currentTarget);
    var score = 5 - $currentTarget.index();
    var parent = $currentTarget.parent();
    parent.parent().attr('data-score', score)
    var children = parent.children();
    children.each(function (index, element) {
      var correctIndex = 5 - index;
      if(correctIndex <= score){
        $(element).removeClass('empty-star');
        $(element).empty();
        $(element).html("&#x2605");
        $(element).addClass('full-star');
      } else {
        $(element).removeClass('full-star');
        $(element).empty();
        $(element).html("&#x2606");
        $(element).addClass('empty-star');
      }

    })
  },

  // data: {review: {}},

  submit: function(event) {
    event.preventDefault();
    var formElement = $(event.currentTarget).parent()
    // Why is this not available in the each!?
    var data = {'review': {}};
    var that = this;
    formElement.children().each(function (index, element) {
      if(index + 1 != formElement.children().length){
        data['review'][$(element).attr('id')] = $(element).attr('data-score')
      }
    })
    // var attrs = this.$el.serializeJSON();
    data['review']['park_id'] = this.model.id;
    var newReview = new ParksNRecs.Models.Review(data);

    newReview.save({}, {
      success: function(){
        that.collection.add(newReview, {merge: true});
        Backbone.history.navigate("/#/parks/" + this.model.id, {trigger: true});
      },
    });
  },

  render: function(){
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }

});
