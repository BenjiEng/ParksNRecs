ParksNRecs.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },


  routes: {
    "": "root"
  },

  root: function () {
    var parks = ParksNRecs.parks.fetch();
    var rootView = new ParksNRecs.Views.Root({collection: parks});
    this._swapView(rootView);

  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el)
  }







})
