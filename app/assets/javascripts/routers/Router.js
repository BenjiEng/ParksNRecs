ParksNRecs.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    ParksNRecs.parks.fetch();
  },


  routes: {
    '': 'searchShow',

    'basic': 'basicMapShow',
    "markers": "markerMapShow",
    'events': 'eventsMapShow',

    'parks/:id': 'parkShow',

  },

  basicMapShow: function () {
   var view = new ParksNRecs.Views.BasicMapShow();
   this._swapView(view);
 },

 markerMapShow: function () {
  //  ParksNRecs.parks.fetch();
   var view = new ParksNRecs.Views.MarkerMapShow({
     collection: ParksNRecs.parks
   });
   this._swapView(view);
 },

 eventsMapShow: function () {
  //  ParksNRecs.parks.fetch();
   var view = new ParksNRecs.Views.EventMapShow({
     collection: ParksNRecs.parks
   });
   this._swapView(view);
 },

 searchShow: function () {
  //  ParksNRecs.parks.fetch();
  var view = new ParksNRecs.Views.SearchShow({
    collection: ParksNRecs.parks
  });
  this._swapView(view);
},

parkShow: function(id) {

  var park = ParksNRecs.parks.getOrFetch(id);
  var view = new ParksNRecs.Views.ParkShow({
    model: park
  });
  this._swapView(view)
},

  root: function () {
    // ParksNRecs.parks.fetch()
    var rootView = new ParksNRecs.Views.Root({collection: ParksNRecs.parks});
    this._swapView(rootView);

  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el)
    view.render();
  }







})