ParksNRecs.Collections.Parks = Backbone.Collection.extend({
  url: "/api/parks",
  model: ParksNRecs.Models.Park,

getOrFetch: function(id){
  var park = this.get(id);
  var parks = this;
  if(!park) {
    var park = new ParksNRecs.Models.Park({id: id});
    park.fetch({
      success: function(){
        parks.add(park);
      }
    });
  } else {
    park.fetch();
  }
  return park;
}
});

ParksNRecs.parks = new ParksNRecs.Collections.Parks()
