ParksNRecs.Views.ParkIndexItem = Backbone.View.extend({
  template: JST['parks/index-item'],
  tagName: 'li',
  className: 'park-item',


  initialize: function () {
    this.$el.attr('data-park-id', this.model.id)
  },

  render: function () {
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }


});
