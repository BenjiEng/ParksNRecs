ParksNRecs.Views.Root = Backbone.CompositeView.extend({
  template: JST['root'],

  initialize: function (options) {
    this.collection = options.collection
    this.addIndex();

  },

  addIndex: function () {
    var view = new ParksNRecs.Views.ParksIndex({collection: this.collection});
    this.addSubview('#parks-index', view);
  },



  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }



})
