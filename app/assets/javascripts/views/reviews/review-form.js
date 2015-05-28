ParksNRecs.Views.ReviewForm = Backbone.View.extend({
  template: JST['reviews/form'],
  errorTemplate: JST['errors'],
  events: {
    'click .submit_button': 'submit',
    'click span': 'setStars',
    'click .comment-field': 'clearField'
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

  clearField: function (event) {
    this.$('.comment-field').html('')
  },

  submit: function(event) {
    event.preventDefault();
    var formElement = $(event.currentTarget).parent()
    // Why is this not available in the each!?
    var data = {'review': {}};
    var that = this;
    this.$('tr').each(function (index, element) {
        var category = $(element).find('.rating-cat').attr('id');
        var score = $(element).find('.score').attr('data-score');
        data['review'][category] = score
    })
    data['review']['park_id'] = this.model.id;
    var newReview = new ParksNRecs.Models.Review(data);
    newReview.save({}, {
      success: function(){
        that.collection.add(newReview, {merge: true});
        Backbone.history.navigate("/#/parks/" + that.model.id, {trigger: true});
      },
      error: function (model, response) {
        that.$('.errors').html('')
        if(response.responseJSON){
          response.responseJSON.forEach(function (error) {
            var content = that.errorTemplate({error: error})
            that.$('.errors').prepend(content);
            setTimeout( function () {
              $(".alert").fadeOut();
            }, 5000);
          })
        } }
    });
  },

  render: function(){
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }

});
