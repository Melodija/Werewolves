wwApp.controller('narrationController', function($scope, deckService) {
  var self = this;

  self.turns = ['werewolves', 'villager', 'seer'];
  self.playDeck = deckService.get();

  self.currentTurn = 0;

  self.day = 1;

  self.getOrder = function(array){
      return array.map(function(obj){return obj.order;});
  };

  self.nextTurn = function(array) {
    self.currentTurn ++;
    if (self.getOrder(array).includes(self.currentTurn)) {
      return self.currentTurn;
    } else if (self.currentTurn > 70) {
       self.currentTurn = 0;
       self.nextTurn(array);
    } else {
      self.nexTurn(array);
    }
  };

  self.checkTitle = function(){if (self.currentTurn == this.order){ return this.title;}};

  self.getTitle = function (array) {
    array.forEach(checkTitle());
  };

  self.narrativeStore = {
    werewolves: 'Please all agree on a person you would like to devour tonight.',
    villager: 'Discuss who died. Then please nominate who you would like to lynch today. The person with the most votes shall day today.',
    seer: 'Please select someone whose card you would like to see.'
  };

  self.getNarrative = function() {
    return self.narrativeStore[self.turns[self.currentTurn]];
  };


});
