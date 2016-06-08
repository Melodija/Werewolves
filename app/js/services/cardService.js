angular.module('wwApp')
       .service('cardService', ['cardFactory', function(cardFactory) {
  var self = this;

  var villager = function(){
    this.title = "Villager";
    this.image = "picture.png";
    this.text = "dies";
  };

  var werewolf = function(){
    this.title = "Werewolf";
    this.image = "picture.png";
    this.text = "kills";
  };

  self.createCards = function(number) {
    var characters = [[],[]];
    for (i = number; i > 0; i--) {
      if (i % 4 === 0) { characters[1].push(new cardFactory("Werewolf", "picture.png", "kills")); }
      else { characters[0].push(new cardFactory("Villager", "picture.png", "dies")); }
    }
    return characters;
  };


}]);
