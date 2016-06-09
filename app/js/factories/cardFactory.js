wwApp.factory('cardFactory', function() {

  var card = function(title, image, text, order) {
    this.title = title;
    this.image = image;
    this.text = text;
    this.order = order;
  };

  return card;

});
