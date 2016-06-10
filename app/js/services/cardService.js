angular.module('wwApp')
       .service('cardService', ['cardFactory', function(cardFactory) {
  var self = this;

  var villager = new cardFactory("Villager", "picture.png", "dies", 1);
  var werewolf = new cardFactory("Werewolf", "picture.png", "kills", 3);
  var seer = new cardFactory("Seer", "picture.png", "sees", 2);

  // self.characterParser = function(arrayOfSpecials){
  //   functionArray = [];
  //   parser = { 'Villager': villager,
  //               'Werewolf': werewolf,
  //               'Seer': seer,
  //               'Witch': witch,
  //               'Defender': defender};
  //             };
  //   for (i = 0; i < arrayOfSpecials.length; i++){
  //     if (arrayOfSpecials[i].localeCompare(parser)){
  //       functionArray.push(parser[arrayOfSpecials[i]);
  //     }
  //     else {
  //         return 'this thing is not there';
  //       }
  //     }
  // }

  self.createCards = function(numOfPlayers, numOfWolves) {
    var characters = [];
    // for (i = number; i > 0; i--) {
    //   if (i % 4 === 0) { characters[1].push(werewolf); }
    //   else { characters[0].push(villager); }
    // }
    // return characters;
  };






}]);
