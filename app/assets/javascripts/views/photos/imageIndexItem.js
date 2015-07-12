ParksNRecs.Views.ImageIndexItem = Backbone.View.extend({
  template: JST['photos/image'],

  initialize: function() {
    this.listenTo(this.model, 'add', this.render);
    // this.render()
  },

  render: function () {
    var content = this.template({picture: this.model});
    this.$el.html(content);
    return this;
  }

});
