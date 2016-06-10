wwApp.controller('narrationController', function(deckService) {
  var self = this;

  self.turns = ['werewolves', 'villager', 'seer'];
  self.playDeck = deckService.get();
  self.playDeck.sort(function(a,b) {return (a.orderNumber > b.orderNumber) ? 1 : ((b.orderNumber > a.orderNumber) ? -1 : 0);} );
  console.log(self.playDeck);

  self.currentTurn = 0;

  self.currentRole = "";

  self.day = 1;

  self.getOrder = function(array){
      return array.map(function(obj){console.log(obj);return obj.orderNumber;});
  };

  self.nextTurn = function(array) {
    console.log(self.currentTurn);
    if (self.currentTurn === self.playDeck.length - 1) {
      self.currentTurn = 0;
    } else {
      self.currentTurn += 1;
    }
  };

  self.getTitle = function (array) {
    array.forEach(function(object) {
      if(object.orderNumber === self.currentTurn){
        self.currentRole = object.title;

      }
    });
  };

  self.getNarrative = function() {
    return self.narrativeStore[self.currentRole];
  };

  self.narrativeStore = {
    werewolves: 'Please all agree on a person you would like to devour tonight.',
    villager: 'Discuss who died. Then please nominate who you would like to lynch today. The person with the most votes shall day today.',
    seer: 'Please select someone whose card you would like to see.'
  };

});
