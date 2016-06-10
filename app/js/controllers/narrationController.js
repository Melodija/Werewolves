wwApp.controller('narrationController', function(deckService) {
  var self = this;

  self.playDeck = deckService.get();
  self.playDeck.sort(function(a,b) {return (a.orderNumber > b.orderNumber) ? 1 : ((b.orderNumber > a.orderNumber) ? -1 : 0);} );
  console.log(self.playDeck);

  self.currentTurn = 0;

  self.currentRole = "";

  self.day = 1;

  self.nextTurn = function(array) {
    console.log(self.currentTurn);
    if (self.currentTurn === self.playDeck.length - 1) {
      self.currentTurn = 0;
    } else {
      self.currentTurn += 1;
    }
  };

  self.getTitle = function (array) {
    self.currentRole = array[self.currentTurn].title;
  };

  self.getNarrative = function() {
    return self.narrativeStore[self.currentRole];
  };

  self.narrativeStore = {
    Thief: "*Show the two faced down cards in the middle* Would you like to exchange your persona for one of these cards? You will take on this character for the rest of the game.",
    Actor: "Would you like to become one of the personas shown in the middle? *If they pick a card, remove that card from the middle*",
    Cupid: "Please point to two people whom you would like to become lovers.",
    Lovers: "Lovers, please acknowledge each other. You are now bound by your love and must protect each other until the end of time. Reminder: if one of you die, the other dies from heartbreak.",
    Seer: "Please select someone whose card you would like to see. *Show them the card*",
    Fox: "Would you like to choose a person to find out whether or not them, or the people sitting next to each other, are a werewolf? Reminder: if none of the 3 people are a werewolf, you lose your power for the rest of the game.",
    StutteringJudge: "Please indicate to me a sign that you will show me during the vote if you would like a second vote to commence in the day.",
    TwoSisters: "Please awake and acknowledge your sibling. You must protect each other.",
    ThreeBrothers: "Please awake and acknowledge your siblings. You must protect each other.",
    WildChild: "Please select someone to idolise. You will continue to idolise them for the rest of the game. Reminder: if they die, you will turn into a werewolf.",
    WolfHound: "Please indicate with a smile to me whether you would like to be a villager or an angry face if you would prefer to be a werewolf for the game. ",
    BearTamer: "Please awake so I can acknowledge you. Reminder: I will do (a sign / noise) in the day if one of the people sitting next to you is a Werewolf.",
    Elder: "Please awake so I may acknowledge who you are. Reminder: If a wolf attempts to devour you, you will not die the first time. If you die, you can assume it has happened twice or it wasn't a wolf who killed you.",
    Defender: "Please select someone you would like to defend from the werewolves tonight. Reminder: You cannot defend the same person two nights in a row.",
    Werewolves: "Please all agree on a person you would like to devour tonight.",
    WhiteWolf: "Please indicate who else you would like to kill. Reminder: You may kill a fellow Werewolf if you wish.",
    DaddyWolf: "*Check if they raise their hand after the wolves have gone to sleep.*",
    BigBadWolf: "*If no Werewolves / Wild Child / Wolf Hound have been eliminated:* Please point to another person you would like to devour tonight. *If one of those characters has died:* You can no longer use your power because a (x) has died.",
    Witch: "Would you like to kill anyone? Would you like to save the damned? *Point to the dead*",
    Piper: "Please pick two people you would like to charm tonight. Reminder: You cannot charm yourself or already charmed people.",
    Charmed: "Tap the people who have been charmed to let them know about this. They don't acknowledge each other.",
    Villagers: 'Everyone awakes apart from (insert person name here). Discuss who died. Then please nominate who you would like to lynch today. The person with the most votes shall die today. *Remember to grunt if the Bear Tamer is in play.* *Remember to keep an eye on Stuttering Judge and Devoted Servant if they are in play during the vote*',
  };

});
