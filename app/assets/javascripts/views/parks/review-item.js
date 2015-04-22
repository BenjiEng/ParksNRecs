ParksNRecs.Views.ParkReviewItem = Backbone.View.extend({
  template: JST['parks/review-item'],
  tagName: 'li',
  className: 'review-item',


  initialize: function () {
    console.log(this.model);
    // this.$el.attr('data-review-id', this.model.id)
  },

  render: function () {
    var content = this.template({review: this.model});
    this.$el.html(content);
    return this;
  }


});
