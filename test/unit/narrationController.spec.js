describe('narrationController', function(){
  beforeEach(module('wwApp'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller("narrationController");
  }));
  // beforeEach(inject(function(_cardService_, _cardFactory_) {
  //   cardService = _cardService_;
  //   cardFactory = _cardFactory_;
  // }));


  it('returns an array', function() {
    var villager = new cardFactory("Villager", "picture.png", "dies", 1);
    var werewolf = new cardFactory("Werewolf", "picture.png", "kills", 2);
    var array = [villager, werewolf];
    expect(controller.getOrder(array)).toEqual([1,2]);
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

  // xit('turn order resets each night', function() {
  //   controller.nextTurn();
  //   controller.nextTurn();
  //   expect(controller.currentTurn).toEqual(0);
  // });
  //
  // xit('can return the correct narrative', function() {
  //   expect(controller.getNarrative()).toEqual('hello kill things');
  // });
  //
  // xit('can return the correct narrative next turn', function() {
  //   controller.nextTurn();
  //   expect(controller.getNarrative()).toEqual('kill each other');
  // });
  //
  // xit('starts on day one', function() {
  //   expect(controller.day).toEqual(1);
  // });
  //
  // xit('next turn increases the day count', function() {
  //   controller.nextTurn();
  //   expect(controller.day).toEqual(2);
  // });

});
