describe('narrationController', function(){
 beforeEach(module('wwApp'));

 var controller;

 beforeEach(inject(function($controller) {
   controller = $controller("narrationController");
 }));

 beforeEach(inject(function(​_cardService_​, ​_cardFactory_​) {
   cardService = ​_cardService_​;
   cardFactory = ​_cardFactory_​;
 }));

 it('can access the order property of an object', function(){
   var villager = new cardFactory("Villager", "picture.png", "dies", 1);
   expect(villager.order).toEqual(1);
 });

 it('returns the next possible turn', function() {
   var villager = new cardFactory("Villager", "picture.png", "dies", 1);
   var werewolf = new cardFactory("Werewolf", "picture.png", "kills", 2);
   var array = [villager, werewolf];
   expect(controller.nextTurn(array)).toEqual(1);
 });

 it('should get the orders of the array', function() {
   var villager = new cardFactory("Villager", "picture.png", "dies", 1);
   var wolf = new cardFactory("Werewolf", "picture.png", "kills", 2);
   array = [villager, wolf];
   expect(controller.getOrder(array)).toEqual([1,2]);
 });

 it('turn order resets each night', function() {
   var villager = new cardFactory("Villager", "picture.png", "dies", 1);
   var werewolf = new cardFactory("Werewolf", "picture.png", "kills", 2);
   var array = [villager, werewolf];
   controller.nextTurn(array);
   expect(controller.nextTurn(array)).toEqual(2);
 });

 it('returns the title of the required object', function() {
   var villager = new cardFactory("Villager", "picture.png", "dies", 1);
   var werewolf = new cardFactory("Werewolf", "picture.png", "kills", 2);
   var array = [villager, werewolf];
   self.currentTurn = 2;
   self.getTitle = function (array) {
     return array.forEach(checkTitle());
   };
   expect(controller.getTitle(array)).toEqual('Werewolf');
 });

 it('can check the title of a single object', function() {
   var wolf = new cardFactory("Werewolf", "picture.png", "kills", 2);
   self.currentTurn = 2;
   expect(controller.checkTitle(wolf)).toEqual("Werewolf");
 });

 xit('starts on day one', function() {
   expect(controller.day).toEqual(1);
 });

 xit('next turn increases the day count', function() {
   controller.nextTurn();
   expect(controller.day).toEqual(2);
 });

});
