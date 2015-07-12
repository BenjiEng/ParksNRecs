ParksNRecs.Views.ParkImages = Backbone.CompositeView.extend({
  template: JST['photos/park-images'],

  initialize: function() {
    // this.listenTo(this.collection, 'add', this.addSliderItem);
    // this.collection.each(function (img) {
    //   var imgItem = new ParksNRecs.Views.ImageIndexItem({model: img});
    // }.bind(this));
    this.imgCount = 0;
    this.imageURL;
    this.render();
    // this.loadImage();
    // this.listenTo(this.collection, "sync", this.loadImage);
  },

  events: {
    "click #chevron-left": "moveLeft",
    "click #chevron-right": "moveRight",
  },

  loadImage: function () {
    // if(this.collection)
    var pic = this.collection.at(this.imgCount);
    // this.imageURL = pic.get("picture_url");
    var view = new ParksNRecs.Views.ImageIndexItem({model: pic});
    // debugger
    ParksNRecs.photo = view
    this.$el.find(".img-box").html(view.render().el)
    // debugger
    // this.render()
  },

  moveLeft: function () {
    if(this.imgCount != 0) {
      // debugger
      this.imgCount -= 1
      this.loadImage();
    }
  },

  moveRight: function () {
    // debugger
    if(this.imgCount != this.collection.length) {
      this.imgCount += 1
      this.loadImage();
    }
  },

  render: function () {
    var content = this.template({url: this.imageURL});
    this.$el.html(content);
    this.loadImage()
    return this;
  }


});
