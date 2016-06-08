wwApp.controller('wwController', ['cardService', 'cardFactory', function(cardService, cardFactory) {
  var self = this;

  self.selectedCard = {
    title: 'Villager',
    image: '/assets/img/villager.jpg',
    text: 'dies'
  };


  self.selectCard = function(card) {
    this.selectedCard = card;
  };

  self.cards = [{
      title: 'Villager',
      image: '/assets/img/villager.jpg',
      text: 'dies'
    },
    {
      title: 'Werewolf',
      image: '/assets/img/werewolf.jpg',
      text: 'kills'
    }
  ];

}]);
