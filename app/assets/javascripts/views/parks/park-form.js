ParksNRecs.Views.ParkForm = Backbone.View.extend({
  template: JST['parks/form'],
  errorTemplate: JST['errors'],
  events: {'click .submit_button': 'submit'},

  initialize: function() {
   this.render();
  },

  submit: function(event) {
    // var data = {'park': {}};
    var that = this;
    event.preventDefault();
    var data = this.$el.find('form').serializeJSON();
    var newPark = new ParksNRecs.Models.Park(data);
    newPark.save({}, {
      success: function(){
        ParksNRecs.parks.add(newPark, {merge: true});
        Backbone.history.navigate("/#", {trigger: true});
      },
      error: function (model, response) {
        that.$('.errors').html('')
        if(response.responseJSON){
          response.responseJSON.forEach(function (error) {
            var content = that.errorTemplate({error: error})
            that.$('.errors').prepend(content);
            setTimeout( function () {
              $(".alert").fadeOut();
            }, 5000);
          })
        } }
    });
  },

  render: function() {
    var content = this.template({park: this.model});
    this.$el.html(content);
    return this;
  }

});
