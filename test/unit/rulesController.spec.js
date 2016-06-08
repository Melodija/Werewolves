describe('cardService', function(){
  beforeEach(module('wwApp'));

  var werewolf = [{title: "Werewolf", image: "picture.jpg", text: "kills"}];

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller("wwController");
  }));

  it('stores the selected card', function(){
    controller.selectCard(werewolf);
    expect(controller.selectedCard).toEqual(werewolf);

  });
});
