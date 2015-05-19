ParksNRecs.Views.ParkShow = Backbone.CompositeView.extend({
  template: JST['parks/show'],
  attributes: {
    id: "map-canvas-show"
  },

  initialize: function() {
    // this.mapView = new ParksNRecs.Views.BasicMapShow({model: this.model, lat: 0, lng: 0});
    this.listenTo(this.model, 'sync', this.addMap);
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.addStars);

    this.collection = this.model.reviews();
    this.listenTo(this.collection, 'add', this.addReview);

    // var that = this;
    // this.collection.each (function (review){
    //   that.addRevItem(review)
    // });
  },

  addMap: function () {
    this.mapView = new ParksNRecs.Views.BasicMapShow({model: this.model, lat: this.model.get('latitude'),
    lng: this.model.get('longitude')
    });
  },

  addStars: function () {
    avgScores = this.model.get('avg_scores')
    var that = this;

    _.each(avgScores, function (score, category) {
      var view = new ParksNRecs.Views.ScoreStars({score: score})
      $('.' + category).html(view.render().$el)
    })
  },

  addReview: function (review) {
    var view = new ParksNRecs.Views.ParkReviewItem({model: review});
    this.addSubview('#review-items', view)
  },

  render: function () {
    var content = this.template({park: this.model});
    this.$el.html(content);
    this.mapView && this.$('.park-map').html(this.mapView.$el);
    this.mapView && this.mapView.render();

    this.attachSubviews();
    return this;
  },
});
