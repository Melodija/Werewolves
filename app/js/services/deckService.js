angular.module('wwApp')
       .service('deckService', function() {
         var self = this;

         self.set = function(_deck){
           localStorage.setItem("playDeck", JSON.stringify(_deck));
           console.log(localStorage.getItem("playDeck"));
         };

         self.get = function(){
           return JSON.parse(localStorage.getItem("playDeck"));
         };

  });
