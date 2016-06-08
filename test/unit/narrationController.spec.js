describe('narrationController', function(){
  beforeEach(module('wwApp'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller("narrationController");
  }));

  it('starts on werewolf turn', function(){
    expect(controller.currentTurn).toEqual(0);
  });

  it('changes turn', function() {
    controller.nextTurn();
    expect(controller.currentTurn).toEqual(1);
  });

  it('turn order resets each night', function() {
    controller.nextTurn();
    controller.nextTurn();
    expect(controller.currentTurn).toEqual(0);
  });

  it('can return the correct narrative', function() {
    expect(controller.getNarrative()).toEqual('hello kill things');
  });

  it('can return the correct narrative next turn', function() {
    controller.nextTurn();
    expect(controller.getNarrative()).toEqual('kill each other');
  });

  it('starts on day one', function() {
    expect(controller.day).toEqual(1);
  });

  it('next turn increases the day count', function() {
    controller.nextTurn();
    expect(controller.day).toEqual(2);
  });

});
