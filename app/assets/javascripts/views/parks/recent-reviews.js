ParksNRecs.Views.RecentReviews = Backbone.CompositeView.extend({
  template: JST['reviews/recent-review'],
  tagName: 'li',
  className: 'review-item',

  initialize: function () {
    this.$el.attr('data-park-id', this.model.id)
    this.addStars();
  },

  addStars: function () {
    avgScores = this.model.get('avg_score');
    var view = new ParksNRecs.Views.ScoreStars({score: avgScores})
    this.addSubview('.ind-str', view);
  },

  render: function () {
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }

});
