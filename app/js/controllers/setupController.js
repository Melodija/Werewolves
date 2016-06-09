wwApp.controller('SetupController', function() {

  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
    return Math.floor(numberofPlayers / 4);
  };
});
