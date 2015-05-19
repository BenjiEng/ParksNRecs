ParksNRecs.Views.ParkIndexItem = Backbone.View.extend({
  template: JST['parks/index-item'],
  tagName: 'li',
  className: 'park-item',

  initialize: function () {
    this.$el.attr('data-park-id', this.model.id)
    debugger;
    // this.addStars();
  },

  // addStars: function () {
  //   avgScores = this.model.get('avg_scores');
  //   avgOverall = avgScores.overall_score;
  //   var view = new ParksNRecs.Views.ScoreStars({score: avgOverall})
  //   this.addSubview('.ind-str', view);
  // },
  //do we not get a park model from index?

  render: function () {
    var content = this.template({park: this.model});
    this.$el.html(content);
    // this.attachSubviews();
    return this;
  }

});
