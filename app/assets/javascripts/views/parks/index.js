ParksNRecs.Views.ParksIndex = Backbone.CompositeView.extend({
  template: JST["parks/index"],

  initialize: function () {
    this.recentReviews = ParksNRecs.reviews;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.addRecentReviews();
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
