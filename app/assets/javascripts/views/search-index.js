ParksNRecs.Views.SearchIndex = Backbone.CompositeView.extend({
  template: JST['search-index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);

    // this.mapView = new ParksNRecs.Views.EventMapShow({
    //   collection: this.collection
    // });
  },

  renderItems: function () {
    var that = this;
    this.collection.each(function (park) {
      that.addPark(park)
    });
  },

  addPark: function (park) {
    var view = new ParksNRecs.Views.ParkIndexItem({model: park})
    this.addSubview('.park-list', view);
  },


  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.renderItems();
    // this.$('.map-show').html(this.mapView.$el);
    // this.mapView.render()
    return this;
  }


});
