wwApp.controller('narrationController', function() {
  var self = this;

  self.turns = ['werewolves', 'villager', 'seer'];

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
    werewolves: 'hello kill things',
    villager: 'kill each other',
    seer: 'see things'
  };

  self.getNarrative = function() {
    return self.narrativeStore[self.turns[self.currentTurn]];
  };


});
