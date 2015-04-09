ParksNRecs.Views.ReviewForm = Backbone.View.extend({
  template: JST['reviews/form'],
  events: {
    'click button': 'submit',
    'onmouseover span': 'spanner'
  },

  initialize: function() {
    this.collection = this.model.reviews;
    this.listenTo(this.model, 'sync', this.render)
  },

  spanner: function(event) {
    event.preventDefault();
    console.log("working");
  },

  submit: function(event) {
    event.preventDefault();
    var that = this;
    var attrs = this.$el.serializeJSON();
    var newReview = new ParksNRecs.Models.Review();

    this.newReview.set(attrs);
    this.newReview.save({}, {
      success: function(){
        that.collection.add(that.newReview, {merge: true});
        Backbone.history.navigate("/", {trigger: true});
      },
    });
  },

  render: function(){
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }

});
