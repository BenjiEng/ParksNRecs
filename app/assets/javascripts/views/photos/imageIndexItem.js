ParksNRecs.Views.ImageIndexItem = Backbone.View.extend({
  template: JST['photos/image'],

  initialize: function() {
    this.render()
  },

  render: function () {
    var content = this.template({image: this.model});
    this.$el.html(content);
    return this;
  }

});
