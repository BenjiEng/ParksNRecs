ParksNRecs.Views.ParkShow = Backbone.CompositeView.extend({
  template: JST['parks/show'],
  attributes: {
    id: "map-canvas-show"
  },

  initialize: function() {
    // this.mapView = new ParksNRecs.Views.BasicMapShow({model: this.model, lat: 0, lng: 0});
    this.listenTo(this.model, 'sync', this.addMap);
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.addReviews);
  },

  addMap: function () {
    this.mapView = new ParksNRecs.Views.BasicMapShow({model: this.model, lat: this.model.get('latitude'),
    lng: this.model.get('longitude')
    });
  },

  addReviews: function () {
    avgScores = this.model.get('avg_scores')
    var that = this;

    _.each(avgScores, function (score, category) {
      var view = new ParksNRecs.Views.ScoreStars({score: score})
      $('.' + category).html(view.render().$el)
    })
  },

  addRevItem: function (review) {
    var view = new ParksNRecs.Views.ReviewIndexItem({model: review});
    this.addSubview('#review-items', view)
  },

  render: function () {
    var content = this.template({park: this.model});
    this.$el.html(content);
    this.mapView && this.$('.map').html(this.mapView.$el);
    this.mapView && this.mapView.render();
    return this;
  },
});
