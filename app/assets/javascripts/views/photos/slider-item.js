ParksNRecs.Views.PhotoSliderItem = Backbone.View.extend({
  template: JST['photos/slider-item'],

  initialize: function() {
  },

  render: function () {
    var content = this.template({sliderItem: this.model});
    this.$el.html(content);
    return this;
  }


});
