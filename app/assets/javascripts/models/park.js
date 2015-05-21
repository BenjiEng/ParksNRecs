ParksNRecs.Models.Park = Backbone.Model.extend({
  urlRoot: "api/parks",
  reviews: function() {
    if (!this._reviews) {
      this._reviews = new ParksNRecs.Collections.Reviews();
    }
    return this._reviews;
  },

  photos: function() {
    if (!this._photos) {
      this._photo = new ParksNRecs.Collections.Photos();
    }
    return this._photos;
  },

  parse: function(response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, {parse: true});
      delete response.reviews;
    }

    if (response.photos) {
      this.photos().set(response.photos, {parse: true});
      delete response.photos;
    }
    return response;
  }

});
