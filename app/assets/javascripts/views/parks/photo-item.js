ParksNRecs.Views.ParkPhotoItem = Backbone.CompositeView.extend({
  template: JST['parks/photo-item'],
  tagName: 'li',
  className: 'photo-item',


  initialize: function () {
  },


  render: function () {
    var content = this.template({photo: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});