ParksNRecs.Collections.Photos = Backbone.Collection.extend({
  url: "api/photos",
  model: ParksNRecs.Models.Photo

});

// ParksNRecs.photos = new ParksNRecs.Collections.Photos()
