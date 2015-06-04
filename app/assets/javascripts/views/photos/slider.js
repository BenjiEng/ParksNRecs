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
    // $('.next').click(function() {
    //   clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > this.itemAmt - 1) {
      currentIndex = 0;
    }
    this.cycleItems();
  },

  prev: function (event) {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = this.itemAmt - 1;
    }
    this.cycleItems();
  },

  cycleItems: function () {
    debugger
    var item = this.$('.slide-container div').eq(currentIndex);
    items.hide();
    item.css('display', 'inline-block');

    // function cycleItems() {
    //   var item = $('.slide-container div').eq(currentIndex);
    //   items.hide();
    //   item.css('display','inline-block');
    // }
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
