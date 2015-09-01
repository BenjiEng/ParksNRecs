ParksNRecs.Views.RecentReviews = Backbone.CompositeView.extend({
  template: JST['reviews/recent-review'],

  initialize: function () {
    ParksNRecs.reviews.fetch();
    this.addRecentReviews();
    this.listenTo(this.collection, 'add', this.addRecentReview);
    this.listenTo(this.collection, 'add', this.render);
  },

  addRecentReviews: function (review) {
    if(this.collection.length > 0) {
      this.collection.each(function (review) {
        this.addRecentReview(review);
      }.bind(this));
    }
    else {
      this.collection.fetch();
    }
  },

  addRecentReview: function (review) {
    var view = new ParksNRecs.Views.ParkReviewItem({model: review});
    this.addSubview('#reviews', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
