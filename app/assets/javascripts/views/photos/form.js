ParksNRecs.Views.PhotoForm = Backbone.View.extend({
  template: JST['photos/form'],

  render: function () {
    var content = this.template({park: this.model})
    this.$el.html(content)
    return this;

  }




})
