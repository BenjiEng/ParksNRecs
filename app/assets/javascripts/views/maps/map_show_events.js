ParksNRecs.Views.EventMapShow = Backbone.View.extend({
  // Initialization
  attributes: {
    id: "map-canvas"
  },

  initialize: function (options) {
    this._markers = {};
    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
    this.lat = options.lat;
    this.lng = options.lng;
    var browserSupportFlag = new Boolean();
  },

  render: function () {
    var that = this;
    if (this.lng && this.lat) {
      userLat = that.lat;
      userLng = that.lng
    } else {
      alert("Geolocation service failed.")
      userLat = 40.7833;
      userLng = -122.4167;
    }
    
    var mapOptions = {
      center: { lat: userLat, lng: userLng},
      zoom: 12
    };

    this._map = new google.maps.Map(this.el, mapOptions);

    this.collection.each(this.addMarker.bind(this));
    this.attachMapListeners();
  },

  attachMapListeners: function () {
    google.maps.event.addListener(this._map, 'idle', this.search.bind(this));
    // google.maps.event.addListener(this._map, 'click', this.createListing.bind(this));
  },

  // Event handlers
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

  // createListing: function (event) {
  //   var lat = event.latLng.lat();
  //   var lng = event.latLng.lng();
  //   var park = new GoogleMapsDemo.Models.Listing({
  //     lat: lat,
  //     lng: lng
  //   });
  //
  //   park.save({}, {
  //     success: function () {
  //       this.collection.add(park);
  //     }.bind(this)
  //   });
  // },

  search: function () {
    // This method will re-fetch the map's collection, using the
    // map's current bounds as constraints on latitude/longitude.

    var mapBounds = this._map.getBounds();
    var ne = mapBounds.getNorthEast();
    var sw = mapBounds.getSouthWest();

    var filterData = {
      lat: [sw.lat(), ne.lat()],
      lng: [sw.lng(), ne.lng()]
    };

    this.collection.fetch({
      data: { filter_data: filterData }
    });
  },

  removeMarker: function (park) {
    var marker = this._markers[park.id];
    marker.setMap(null);
    delete this._markers[park.id];
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

  startBounce: function (id) {
    var marker = this._markers[id];
    marker.setAnimation(google.maps.Animation.BOUNCE);
    },

  stopBounce: function (id) {
    var marker = this._markers[id];
    marker.setAnimation(null);
  }
});
