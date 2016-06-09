wwApp.controller('SetupController', function($scope, deckService) {

  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
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
  self.roles = ['seer', 'hunter', 'werewolf', 'villager'];

  $scope.selectedRoles = {};

  self.confirmedRoles = [];

self.objToArray = function (object) {
  var result = Object.keys(object).filter(function(x) {

      if( object[x] !== false){
        self.confirmedRoles.push(x);
      }
  });
};

self.setDeck = function (confirmedRoles) {
  deckService.set(confirmedRoles);
};

  // self.confirmedRoles = {};
  //
  // self.selectRoles = function(selectedRoles) {
  //   self.confirmedRoles = selectedRoles;
  //   console.log(self.confirmedRoles);
  // };
});
