ParksNRecs.Views.ParkShow = Backbone.CompositeView.extend({
  template: JST['parks/show'],
  attributes: {
    id: "map-canvas-show"
  },

  initialize: function() {
    // this.mapView = new ParksNRecs.Views.BasicMapShow({model: this.model, lat: 0, lng: 0});
    this.listenTo(this.model, 'sync', this.addMap)
    this.listenTo(this.model, 'sync', this.render)

  },

  addMap: function () {
    debugger
    this.mapView = new ParksNRecs.Views.BasicMapShow({model: this.model, lat: this.model.get('latitude'),
    lng: this.model.get('longitude')
    });
  },

  addReviewView: function () {

  },


  render: function () {
    var content = this.template({park: this.model});
    this.$el.html(content);
    this.mapView && this.$('.map').html(this.mapView.$el);
    this.mapView && this.mapView.render();
    return this;

  },

});
