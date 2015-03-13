ParksNRecs.Views.ParkIndexItem = Backbone.View.extend({
  template: JST['parks/index-item'],

  render: function () {
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }


});
