wwApp.controller('SetupController', function($scope, deckService) {

  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
    return Math.floor(numberofPlayers / 4);
  };

  self.roles = [
              {title: 'seer',
              orderNumber: 1,
              dayOne: false},
              {title: 'hunter',
              orderNumber: 999,
              dayOne: false},
              {title: 'werewolves',
              orderNumber: 0,
              dayOne: false},
              {title: 'villager',
              orderNumber: 2,
              dayOne: false}];

  $scope.selectedRoles = {};

  self.confirmedRoles = [];

  self.objToArray = function (object) {
    var result = Object.keys(object).filter(function(x) {

        if( object[x] !== false){self.confirmedRoles.push(object[x]); }
    });
    deckService.set(self.confirmedRoles);
  };
});
