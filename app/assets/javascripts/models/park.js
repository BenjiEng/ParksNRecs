ParksNRecs.Models.Park = Backbone.Model.extend({
  urlRoot: "api/parks",
  reviews: function() {
    if (!this._reviews) {
      this._reviews = new ParksNRecs.Collections.Reviews();
    }
    return this._reviews;
  },

  parse: function(response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, {parse: true});
      delete response.reviews;
    }
    return response;
  }

});
