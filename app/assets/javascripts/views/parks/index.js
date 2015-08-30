ParksNRecs.Views.ParksIndex = Backbone.CompositeView.extend({
  template: JST["parks/index"],

  initialize: function (options) {
    this.recentReviews = ParksNRecs.reviews;
    debugger
    // this.collection = this.recentReviews.fetch();
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.addRecentReviews();

    var that = this;
    this.collection.each(function (park) {
      that.addIndexItem(park)
    });

    // this.listenTo(this.recentReviews, 'add', this.addRecentReview);
    // this.recentReviews.each(function (review) {
    //   that.addRecentReview(review)
    // });
  },

  addIndexItem: function (park) {
    var view = new ParksNRecs.Views.ParkIndexItem({model: park});
    this.addSubview('#park-items', view)
  },

  addRecentReviews: function () {
      var view = new ParksNRecs.Views.RecentReviews({collection: this.recentReviews});
      this.addSubview('#recent-reviews', view);
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content)
    this.attachSubviews()
    return this;
  }

});
