ParksNRecs.Views.ImageBox = Backbone.View.extend({
  template: JST['photos/image'],

  initialize: function() {
    debugger
    this.render()
  },

  render: function () {
    var content = this.template({
      picture: this.model
    });

    this.$el.html(content);
    return this;
  }

});
