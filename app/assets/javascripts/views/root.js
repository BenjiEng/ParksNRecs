ParksNRecs.Views.Root = Backbone.CompositeView.extend({
  // Initialization
  template: JST['root'],

  className: 'full-size',

  initialize: function () {
    this.mapView = new ParksNRecs.Views.EventMapShow({
      collection: this.collection
    });

    this.parksIndex = new ParksNRecs.Views.ParksIndex({
      collection: this.collection
    });
  },

  events: {
    'click a.remove-park': 'destroyPark',
    'click a.park-name': 'panToPark',
    'mouseenter li.park-item': 'startBounce',
    'mouseleave li.park-item': 'stopBounce'
  },

  // Event handlers
  startBounce: function (event) {
    var parkId = $(event.currentTarget).data('park-id');
    this.mapView.startBounce(parkId);
  },

  stopBounce: function (event) {
    var parkId = $(event.currentTarget).data('park-id');
    this.mapView.stopBounce(parkId);
  },

  destroyPark: function (event) {
    var parkId = $(event.currentTarget).data('park-id');
    var park = this.collection.get(parkId);
    park.destroy();
  },

  panToPark: function (event) {
    var parkId = $(event.currentTarget).data('park-id');
    var marker = this.mapView._markers[parkId];
    this.mapView._map.panTo(marker.getPosition());
  },

  render: function () {
    // Because we render the `mapView` here, we MUST NOT re-render this view.
    var content = this.template();
    this.$el.html(content);
    this.$('.sidebar').html(this.parksIndex.render().$el);
    this.$('.map').html(this.mapView.$el);
    this.mapView.render();
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.mapView.remove();
    this.parksIndex.remove();
  }
});
