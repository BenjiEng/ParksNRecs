ParksNRecs.Views.ScoreStars = Backbone.View.extend({
  template: JST['parks/stars'],

  initialize: function (options) {
    this.score = options.score

  },

  render: function () {
    var content = this.template();
    var that = this;
    this.$el.html(content);
    var stars = this.$el.find('.empty-star')
    // debugger
    stars.each(function (index, element) {
      // debugger
      if(that.score >= index + 1) {
        $(element).html("&#x2605")
        $(element).css('color',"blue" )
        // $(element).removeClass('empty-star')
        // $(element).addClass('full-star')
        }
      stars

    })

    return this;
  }



})
