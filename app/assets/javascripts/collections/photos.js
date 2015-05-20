ParksNRecs.Collections.Photos = Backbone.Collection.extend({
  url: "api/photos",
  model: ParksNRecs.Models.Photo,

  getOrFetch: function(id){
    var photos = this;
    var photo = this.get(id);
    if (photo) {
      photo.fetch();
    } else {
      photo = new ParksNRecs.Models.Photo({id: id});
      photo.fetch({
        success: function () {
          photos.add(photo);
        }
      });
    }
    return photo;
  },

});

ParksNRecs.photos = new ParksNRecs.Collections.Photos()
