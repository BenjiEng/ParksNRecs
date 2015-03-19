ParksNRecs.Views.BasicMapShow = Backbone.View.extend({
  // Initialization
  attributes: {
    id: "map-canvas"
  },

  initialize: function (options) {
    this._markers = {};
    this.lat = options.lat;
    this.lng = options.lng;
    // this.listenTo(this.model, 'sync', this.render)

  },

  addMarker: function (park) {
    if (this._markers[park.id]) { return };
    var view = this;

    var latLng = new google.maps.LatLng(
      park.get('latitude'),
      park.get('longitude')
    );

    var marker = new google.maps.Marker({
      position: latLng,
      map: this._map,
      title: park.get('name')
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerInfo(event, marker);
    });

    this._markers[park.id] = marker;
  },

  showMarkerInfo: function (event, marker) {
    // This event will be triggered when a marker is clicked. Right now it simply
    // opens an info window with the title of the marker. However, you could get
    // fancier if you wanted (maybe use a template for the content of the window?)

    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(this._map, marker);
  },

  render: function () {
    // ONLY CALL THIS ONCE!
    var mapOptions = {
      center: { lat: this.lat, lng: this.lng},
      zoom: 15
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    this.addMarker(this.model);
    // return this;
  }
});
