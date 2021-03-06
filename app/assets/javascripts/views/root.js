ParksNRecs.Views.Root = Backbone.CompositeView.extend({
  // Initialization
  template: JST['root'],

  className: 'full-size',

  initialize: function () {
    var that = this;
    if(navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        var userLat = initialLocation['A']
        var userLng = initialLocation['F']
      that.mapView = new ParksNRecs.Views.EventMapShow({
        collection: that.collection, lat: userLat, lng: userLng
      });
      that.$('.map').html(that.mapView.$el);
      that.mapView.render();
    }, function() {
      that.mapView = new ParksNRecs.Views.EventMapShow({
        collection: that.collection
      });
      that.$('.map').html(that.mapView.$el);
      that.mapView.render();
    });
    }



    this.parksIndex = new ParksNRecs.Views.ParksIndex({
      collection: this.collection
    });
  },

  events: {
    'click a.remove-park': 'destroyPark',
    'click a.park-name': 'panToPark',
    'mouseenter .park-item': 'startBounce',
    'mouseleave .park-item': 'stopBounce'
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
    // this.$('.map').html(this.mapView.$el);
    // this.mapView.render();
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.mapView.remove();
    this.parksIndex.remove();
  }
});
