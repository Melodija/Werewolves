wwApp.controller('setupController', function() {
  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
    console.log(this.playerNumber);
    return Math.floor(numberofPlayers / 4);
  };
});
