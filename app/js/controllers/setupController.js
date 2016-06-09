wwApp.controller('SetupController', function() {

  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
    console.log(this.playerNumber);
    return Math.floor(numberofPlayers / 4);
  };

  // self.specialCharacterPicker = function(specials) {
  //   // specials is an array
  //   // wolves are the num_of_wolves
  //   // players are the total number of players in the Game
  //   // totalCharacters = specials;
  //   // wolves.times
  //   // totalCharacters.push("wolf" * wolves)
  //
  // };
});
