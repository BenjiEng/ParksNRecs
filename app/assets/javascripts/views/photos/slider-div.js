ParksNRecs.Views.PhotoSliderDiv = Backbone.CompositeView.extend({
  template: JST['photos/slider-div'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.addSliderItem)
  },

  addSliderItem: function(sliderItem) {
    var view = new ParksNRecs.Views.PhotoSliderItem({model: sliderItem});
    this.addSubview('#slider-item', view)
  },

  render: function () {
    var content = this.template({sliderItem: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
