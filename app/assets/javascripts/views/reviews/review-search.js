ParksNRecs.Views.ReviewSearch = Backbone.CompositeView.extend({
  template: JST['reviews/search'],

  initialize: function () {
    // this.listenTo(this.collection, 'sync', this.renderIndex)
  },

  events: {
    "submit": 'refreshIndex'
  },

  refreshIndex: function (event) {
    event.preventDefault();
    var query = this.$el.find('.search-field').val();
    this.collection.fetch({ data: {name: query, house: 'myhouse'} }) 
    // this.collection.fetch();
    this.renderIndex()
  },

  renderIndex: function () {
    var subview = this.subviews('.parks');
    if(subview.length>0){
      this.removeSubview('.parks', subview[0]);
    }
    var view = new ParksNRecs.Views.SearchIndex({collection: this.collection});
    this.addSubview('.parks', view)
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    // this.attachSubviews();
    return this;
  }


});
