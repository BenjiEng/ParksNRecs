ParksNRecs.Views.RecentReviews = Backbone.CompositeView.extend({
  template: JST['reviews/recent-review'],
  // tagName: 'li',
  // className: 'review-item',

  initialize: function () {

    this.addRecentReviews();
    this.listenTo(this.collection, 'add', this.addRecentReview);
    // this.listenTo(this.collection, 'sync', this.addRecentReview);
    this.listenTo(this.collection, 'add', this.render);
  },

  addRecentReviews: function (review) {
    // debugger
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
