describe('cardService', function(){
  beforeEach(module('wwApp'));

  // var werewolf = [{title: "Werewolf", image: "picture.jpg", text: "kills"}];

  beforeEach(inject(function(_cardService_, _cardFactory_) {
    cardService = _cardService_;
    cardFactory = _cardFactory_;
  }));

  it('fetches cards', function(){

    var werewolf = new cardFactory("Werewolf", "picture.jpg", "kills");
    var villager = new cardFactory("Villager", "picture.jpg", "dies");

    playersArray = [2,1];

    cardService.createCards().then(function(playersArray){
      expect(playersArray).toEqual([[villager, villager],[werewolf]]);
    });
  });
});
