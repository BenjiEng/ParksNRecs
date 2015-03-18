ParksNRecs.Views.ParksIndex = Backbone.CompositeView.extend({
  template: JST["parks/index"],

  initialize: function () {
    debugger
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);

    var that = this;
    this.collection.each(function (park) {
      that.addIndexItem(park)
    })
  },

  addIndexItem: function (park) {
    var view = new ParksNRecs.Views.ParkIndexItem({model: park});
    this.addSubview('#park-items', view)
  },

  render: function () {
    debugger
    var content = this.template({});
    this.$el.html(content)
    this.attachSubviews()
    return this;
  }

});
