ParksNRecs.Collections.Parks = Backbone.Collection.extend({
  url: "/api/parks",
  model: ParksNRecs.Models.Park

});

ParksNRecs.parks = new ParksNRecs.Collections.Parks()
