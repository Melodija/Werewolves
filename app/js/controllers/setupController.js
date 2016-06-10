wwApp.controller('SetupController', function($scope, deckService) {

  var self = this;

  self.playerNumber = function(number){
    this.playerQuantity = number;
  };

  self.werewolfCalculator = function(numberofPlayers) {
    return Math.floor(numberofPlayers / 4);
  };

  $scope.selectedRoles = {};

  self.confirmedRoles = [];

  self.objToArray = function (object) {
    var result = Object.keys(object).filter(function(x) {

        if( object[x] !== false){self.confirmedRoles.push(object[x]); }
    });
    deckService.set(self.confirmedRoles);
  };

  self.roles = [
              {title: 'Thief',
              orderNumber: 1,
              dayOne: true},

              {title: 'Actor',
              orderNumber: 2,
              dayOne: false},

              {title: 'Cupid',
              orderNumber: 3,
              dayOne: true},

              {title: 'Lovers',
              orderNumber: 4,
              dayOne: true},

              {title: 'Seer',
              orderNumber: 5,
              dayOne: false},

              {title: 'Fox',
              orderNumber: 6,
              dayOne: false},

              {title: 'StutteringJudge',
              orderNumber: 7,
              dayOne: true},

              {title: 'TwoSisters',
              orderNumber: 8,
              dayOne: true},

              {title: 'ThreeBrothers',
              orderNumber: 9,
              dayOne: true},

              {title: 'WildChild',
              orderNumber: 10,
              dayOne: true},

              {title: 'WolfHound',
              orderNumber: 11,
              dayOne: true},

              {title: 'BearTamer',
              orderNumber: 12,
              dayOne: true},

              {title: 'Elder',
              orderNumber: 13,
              dayOne: true},

              {title: 'Defender',
              orderNumber: 14,
              dayOne: false},

              {title: 'Werewolves',
              orderNumber: 15,
              dayOne: false},

              {title: 'WhiteWolf',
              orderNumber: 16,
              dayOne: false},

              {title: 'DaddyWolf',
              orderNumber: 17,
              dayOne: false},

              {title: 'BigBadWolf',
              orderNumber: 18,
              dayOne: false},

              {title: 'Witch',
              orderNumber: 19,
              dayOne: false},

              {title: 'Piper',
              orderNumber: 20,
              dayOne: false},

              {title: 'Charmed',
              orderNumber: 21,
              dayOne: false},

              {title: 'Villagers',
              orderNumber: 22,
              dayOne: false},

            ];
=======
>>>>>>> cd7df5e5549f756195451a39d6db70e78319c735
});
