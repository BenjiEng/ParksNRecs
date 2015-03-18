window.ParksNRecs = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new ParksNRecs.Routers.Router({$rootEl: $('#main')});
    var view = new ParksNRecs.Views.Navbar();
    $('#navbar').html(view.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){

});
