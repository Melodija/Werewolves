describe ("deckService", function(){
  beforeEach(module('wwApp'));

  var deckService;
  var deck = ["hunter", "seer", "witch"];

  beforeEach(inject(function(_deckService_){
    deckService = _deckService_;
  }));
  it("stores the confirmedRoles array", function(){
    deckService.set(deck);
    expect(deckService.get()).toEqual(deck);
  });
});
