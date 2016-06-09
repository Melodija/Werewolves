wwApp.controller('SetupController', function($scope) {

  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
    return Math.floor(numberofPlayers / 4);
  };

  self.roles = ['seer', 'hunter', 'werewolf', 'villager'];

  $scope.selectedRoles = {};

  self.confirmedRoles = {};

  self.selectRoles = function(selectedRoles) {
    self.confirmedRoles = selectedRoles;
    console.log(self.confirmedRoles);
  };
});
