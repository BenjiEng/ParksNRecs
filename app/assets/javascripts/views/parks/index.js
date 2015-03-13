ParksNRecs.Views.ParksIndex = Backbone.CompositeView.extend({
  template: JST["parks/index"],

  initialize: function () {
    this.collection = ParksNRecs.parks;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
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
