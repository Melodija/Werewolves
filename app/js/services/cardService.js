angular.module('wwApp')
       .service('cardService', ['cardFactory', function(cardFactory) {
  var self = this;

  var villager = new cardFactory("Villager", "picture.png", "dies", 1);
  var werewolf = new cardFactory("Werewolf", "picture.png", "kills", 3);
  var seer = new cardFactory("Seer", "picture.png", "sees", 2);


  self.createCards = function(number) {
    var characters = [[],[]];
    for (i = number; i > 0; i--) {
      if (i % 4 === 0) { characters[1].push(new cardFactory("Werewolf", "picture.png", "kills")); }
      else { characters[0].push(new cardFactory("Villager", "picture.png", "dies")); }
    }
    return characters;
  };


}]);
