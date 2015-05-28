ParksNRecs.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    ParksNRecs.parks.fetch();
  },

  routes: {
    '': 'root',
    'parks/:id': 'parkShow',
    'parks/new': 'parkForm',
    'review-search': 'reviewSearch',
    'parks/:id/write-review': 'reviewForm',
    'parks/:id/add-photo': 'addPhoto'
  },

   root: function () {
    var view = new ParksNRecs.Views.Root({
      collection: ParksNRecs.parks
    });
    this._swapView(view);
  },

  addPhoto: function (id) {
    var park = ParksNRecs.parks.getOrFetch(id);
    var view = new ParksNRecs.Views.PhotoForm({
    model: park})
    this._swapView(view)
  },

  parkShow: function(id) {
    var park = ParksNRecs.parks.getOrFetch(id);
    var view = new ParksNRecs.Views.ParkShow({
      model: park
    });
    this._swapView(view)
  },

  parkForm: function() {
    debugger
    var park = new ParksNRecs.Models.Park();
    var view = new ParksNRecs.Views.ParkForm({ model: park });
    this._swapView(view)
  },

  reviewSearch: function () {
    var view = new ParksNRecs.Views.ReviewSearch({
      collection: ParksNRecs.parks
    });
    this._swapView(view)
  },

  reviewForm: function (id) {
    var park = ParksNRecs.parks.getOrFetch(id);
    var view = new ParksNRecs.Views.ReviewForm({
      model: park
    });
    this._swapView(view)

  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el)
    view.render();
  }


})
