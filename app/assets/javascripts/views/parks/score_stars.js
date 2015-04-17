ParksNRecs.Views.ScoreStars = Backbone.View.extend({
  template: JST['parks/stars'],

  initialize: function (options) {
    this.score = options.score

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var stars = this.$el.find('.empty-star')
    debugger
    stars.each(function (index, element) {
      debugger
      stars
      element.css('color', 'blue')
    })

    return this;
  }



})
