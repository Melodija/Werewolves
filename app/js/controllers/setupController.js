wwApp.controller('SetupController', ['cardService', 'cardFactory', function(cardService, cardFactory) {
  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
    console.log(this.playerNumber);
    return (numberofPlayers / 4);
  };
}]);
