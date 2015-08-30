ParksNRecs.Collections.Reviews = Backbone.Collection.extend({
  url: "/api/reviews",
  model: ParksNRecs.Models.Review,

getOrFetch: function(id){
  var review = this.get(id);
  var reviews = this;
  if(!review) {
    var review = new ParksNRecs.Models.Review({id: id});
    review.fetch({
      success: function(){
        reviews.add(review);
      }
    });
  } else {
    review.fetch();
  }
  return review;
  }
});

ParksNRecs.reviews = new ParksNRecs.Collections.Reviews()
