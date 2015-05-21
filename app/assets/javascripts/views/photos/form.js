ParksNRecs.Views.PhotoForm = Backbone.View.extend({
  template: JST['photos/form'],
  errorTemplate: JST['errors'],
  tagName: 'form',
  initialize: function () {
      this.pic_url = '';
      this.listenTo(this.model, 'sync', this.render);
      this.collection = this.model.photos();
  },

  events: {
    'click .file-pick-button': 'runFilePicker',
    'click #add-photo': 'addPhoto'
  },

  addPhoto: function () {
    var that = this;
    event.preventDefault();
    var data = this.$el.serializeJSON();
    data['photo']['picture_url'] = this.pic_url;
    data['photo']['park_id'] = this.model.id;
    var photo = new ParksNRecs.Models.Photo(data)
    photo.save({}, {success: function () {
      debugger
      console.log('ya!');
      that.collection.add(photo, {merge: true});
      Backbone.history.navigate("/parks/" + that.model.id, {trigger: true});
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
    } )
  },

  runFilePicker: function () {
    event.preventDefault();
    var that = this;
    filepicker.pick(
      {
        mimetypes: ['image/*', 'text/plain'],
        container: 'window',
        services:['COMPUTER', 'FACEBOOK', 'GMAIL', 'INSTAGRAM', "FLICKR", "IMGUR", "WEBCAM"],
      },
      function(pic){
        that.pic_url = pic.url
        console.log(pic.url);
        console.log(that.pic_url);
    });
  },

  render: function () {
    var content = this.template({park: this.model})
    this.$el.html(content)
    return this;
  }




})
