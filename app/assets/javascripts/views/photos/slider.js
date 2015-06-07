ParksNRecs.Views.PhotoSlider = Backbone.CompositeView.extend({
  template: JST['photos/slider'],

  events: {
    'click button.next': 'next',
    'click button.prev': 'prev'
  },

  initialize: function () {
    this.render();
    currentIndex = 0;
    items = this.$('.slide-container');
    itemAmt = items.length;
  },

  next: function (event) {
    var lastIndex = currentIndex;
    currentIndex += 1;

    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }

    this.cycleItems(lastIndex, currentIndex);
  },

  prev: function (event) {
    var lastIndex = currentIndex;
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    this.cycleItems(lastIndex, currentIndex);
  },

  cycleItems: function (lastIndex, currentIndex) {
    var item = this.$('.slide-container div').eq(currentIndex);
    this.$('.slide-container div').eq(lastIndex).hide();
    item.css('display', 'inline-block');
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

  // var autoSlide = setInterval(function() {
  //   currentIndex += 1;
  //   if (currentIndex > itemAmt - 1) {
  //     currentIndex = 0;
  //   }
  //   cycleItems();
  // }, 3000);
  //


});
