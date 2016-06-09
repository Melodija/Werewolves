describe('narrationController', function(){
  beforeEach(module('wwApp'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller("narrationController");
  }));
  beforeEach(inject(function(_cardService_, _cardFactory_) {
    cardService = _cardService_;
    cardFactory = _cardFactory_;
  }));

  it('can access the order property of an object', function(){
    var villager = new cardFactory("Villager", "picture.png", "dies", 1);
    expect(villager.order).toEqual(1);
  });

  xit('changes turn', function() {
    controller.nextTurn();
    expect(controller.currentTurn).toEqual(1);
  });

  xit('turn order resets each night', function() {
    controller.nextTurn();
    controller.nextTurn();
    expect(controller.currentTurn).toEqual(0);
  });

  xit('can return the correct narrative', function() {
    expect(controller.getNarrative()).toEqual('hello kill things');
  });

  xit('can return the correct narrative next turn', function() {
    controller.nextTurn();
    expect(controller.getNarrative()).toEqual('kill each other');
  });

  xit('starts on day one', function() {
    expect(controller.day).toEqual(1);
  });

  xit('next turn increases the day count', function() {
    controller.nextTurn();
    expect(controller.day).toEqual(2);
  });

});
