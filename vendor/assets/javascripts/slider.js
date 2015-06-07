$.Slider = function (el) {

  this.$el = $(el);
  this.$items = this.$el.find(".items").children();
  this.activeIdx = 0;
  this.transitioning = false;

  this.$items.eq(0).addClass("active");

  this.$el.on("click", "a.slide-left", this.slideLeft.bind(this));
  this.$el.on("click", "a.slide-right", this.slideRight.bind(this));

};

$.fn.slider = function () {
  return this.each(function () {
    new $.Slider(this);
  });
};


$(function () {
  $(".carousel").slider();
});
