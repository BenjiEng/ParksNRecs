ParksNRecs.Views.ParkForm = Backbone.View.extend({
  template: JST['parks/form'],
  errorTemplate: JST['errors'],

  initialize: function() {
   this.render();
  },

  render: function(){
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }

});
