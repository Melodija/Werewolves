describe('cardService', function(){
  beforeEach(module('wwApp'));

  // var werewolf = [{title: "Werewolf", image: "picture.jpg", text: "kills"}];

  beforeEach(inject(function(_cardService_, _cardFactory_) {
    cardService = _cardService_;
    cardFactory = _cardFactory_;
  }));

  xit('fetches cards', function(){

    var werewolf = new cardFactory("Werewolf", "picture.jpg", "kills");
    var villager = new cardFactory("Villager", "picture.jpg", "dies");

    var players = 4;

    expect(cardService.createCards(players)).toEqual([[villager, villager, villager],[werewolf]]);
  });
});
