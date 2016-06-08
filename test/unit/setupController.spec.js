describe('cardService', function(){
  beforeEach(module('wwApp'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller("SetupController");
  }));

  it('stores the number of players', function(){
    controller.playerNumber(4);
    expect(controller.playerQuantity).toEqual(4);
  });
  it('calculates the number of werewolves', function(){
    expect(controller.werewolfCalculator(4)).toEqual(1);
  });
});
