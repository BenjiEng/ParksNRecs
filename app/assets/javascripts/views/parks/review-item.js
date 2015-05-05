ParksNRecs.Views.ParkReviewItem = Backbone.CompositeView.extend({
  template: JST['parks/review-item'],
  tagName: 'li',
  className: 'review-item',


  initialize: function () {
    this.addStars();
  },

  addStars: function () {
    overallScore = this.model.get('overall_score')
    var that = this;
    var view = new ParksNRecs.Views.ScoreStars({score: overallScore});
    this.addSubview('.st', view);
  },

  render: function () {
    var content = this.template({review: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
