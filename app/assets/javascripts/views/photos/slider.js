ParksNRecs.Views.PhotoSlider = Backbone.CompositeView.extend({
  template: JST['photos/slider'],

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addSliderItem);
    // this.listenTo(this.collection, 'add', this.addSliderDiv);
  },

  addSliderItem: function(sliderItem) {
    var view = new ParksNRecs.Views.PhotoSliderItem({model: sliderItem});
    this.addSubview('#slider-item', view)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
