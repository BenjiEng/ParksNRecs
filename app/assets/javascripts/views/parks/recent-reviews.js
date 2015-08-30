ParksNRecs.Views.RecentReviews = Backbone.CompositeView.extend({
  template: JST['reviews/recent-review'],
  // tagName: 'li',
  // className: 'review-item',

  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addRecentReview)
    this.listenTo(this.collection, 'add', this.render);
  },

  check: function () {
    debugger
  },

  addRecentReview: function (review) {
    // debugger
    var view = new ParksNRecs.Views.ParkReviewItem({model: review});
    this.addSubview('#reviews', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    // this.attachSubviews();
    return this;
  }

});
