wwApp.controller('wwController', ['cardService', 'cardFactory', function(cardService, cardFactory) {
  var self = this;

  self.selectedCard = {
    title: 'Villager',
    image: '/assets/img/villager.png',
    text: 'Has no special skill. They have to analyze behaviour to identify werewolves during the day and lynch them.'
  };


  self.selectCard = function(card) {
    this.selectedCard = card;
  };

  self.cards = [{
      title: 'Mayor/Sheriff',
      image: '/assets/img/Sheriff.png',
      text: "At the start of the game, people who want to be the mayor, have 10 seconds to pitch to the group who should be mayor. The vote of the mayor counts as double."
    },
    {
      title: 'Villager',
      image: '/assets/img/villager.png',
      text: 'Has no special skill. They have to analyze behaviour to identify werewolves during the day and lynch them.'
    },
    {
      title: 'Villager-Villager',
      image: '/assets/img/villager-villager.png',
      text: 'Same as normal villager but so pure that they have their card shown on both sides.'
    },
    {
      title: 'Werewolf',
      image: '/assets/img/werewolf.png',
      text: 'Have to eliminate the other inhabitants of the village. Each night, they devour a villager. During the day, they hide who they are to avoid being lynched.'
    },
    {
      title: 'Big Bad Wolf',
      image: '/assets/img/big-bad-wolf.png',
      text: "Called every night. He kills with all the werewolves. As long as no Werewolf, Wild Child or Wolf Hound has been eliminated during the game, he will wake up a second time and devour a second victim."
    },
    {
      title: 'Daddy Wolf',
      image: '/assets/img/daddy-werewolf.png',
      text: "Wakes with the other werewolves and devours with them but once per game, after the werewolves have devoured someone, he raises his hand to mean that the victim hasn’t been devoured, but infected. He can only do this once per game. The moderator then touches the infected victim who then immediately and secretly becomes a Werewolf."
    },
    {
      title: 'Wolf-Hound',
      image: '/assets/img/wolf-hound.png',
      text: "Called on the first night. They decide whether they want to incline to their wolf nature and be a werewolf or show their love for their masters and be a villager. The choice is final for the rest of the game. The narrator does not reveal the choice of the wolf-hound if they die."
    },
    {
      title: 'White Werewolf',
      image: '/assets/img/white-werewolf.png',
      text: "Called every night. Wakes up with the Werewolves and devours with them. Every other night he wakes up a second time alone and kill another person in the night including any werewolves. Their goal is to be the village’s sole survivor."
    },
    {
      title: 'Seer',
      image: '/assets/img/seer.png',
      text: 'Called every night. They see the card of a player of their choice. Helps other villagers during the day as to who to lynch but must remain discreet to not be killed by the werewolves.'
    },
    {
      title: 'Cupid',
      image: '/assets/img/cupid.png',
      text: 'Called on the first night. Selects two people to become lovers. The lovers acknowledge each other and have to protect each other regardless of what their cards are. The cupid can select themselves to be a lover. If one lover is eliminated, the other dies immediately out of heartbreak.'
    },
    {
      title: 'Witch',
      image: '/assets/img/witch.png',
      text: ' Called every night. Is able to brew a healing potion to resurrect the dead and a killing potion to eliminate someone. Can only use each potion once per game. Can heal themselves.'
    },
    {
      title: 'Hunter',
      image: '/assets/img/hunter.png',
      text: 'When they are eliminated, they must kill someone during their last dying breath even if that would leave the game without any players (meaning no side won).'
    },
    {
      title: 'Little Girl',
      image: '/assets/img/little-girl.png',
      text: 'Can spy on the werewolves when they are awake by peeking during the night. But if she is caught by one of the Werewolves then she can be immediately devoured. Only allowed to peek when the Werewolves wake during the night, cannot open eyes and pass themselves off as a Werewolf.'
    },
    {
      title: 'Defender',
      image: '/assets/img/defender.png',
      text: 'Called every night. Can choose someone to protect during the night. Even if werewolves try to kill the person chosen, they will not die. They can protect themselves but cannot protect the same person 2 nights in a row. Doesn’t protect the Little Girl, Piper or infection from Daddy Wolf.'
    },
    {
      title: 'Elder',
      image: '/assets/img/elder.png',
      text: "Doesn’t get eliminated the first time the werewolves attempt to devour him. Only the second time is he killed. However, he is killed instantly by any other means; however if he dies by any means other then all special characters lose their powers. He can’t be turned into a wolf by Daddy Wolf the first bite and the witch can only regain one life to him."
    },
    {
      title: 'Scapegoat',
      image: '/assets/img/scapegoat.png',
      text: "If the village comes to a tie as to who should be lynched, the scapegoat is automatically lynched. However, with his last breath he decides who is allowed to vote in the next lynching and who isn’t."
    },
    {
      title: 'Village Idiot',
      image: '/assets/img/village-idiot.png',
      text: "If the village lynches him, when he turns over his card, everyone realises their mistake and leaves him be. He can continue to play but he can no longer vote. The werewolves can still kill him; if he was the Mayor when killed then the village continues without a Mayor."
    },
    {
      title: 'Two Sisters',
      image: '/assets/img/two-sisters.png',
      text: "Called on the first night. Acknowledge each other and can rely on each other. Every other night, they wake up and agree in silence on any decisions needed to save the village. (Really useful if you know sign language)."
    },
    {
      title: 'Three Brothers',
      image: '/assets/img/three-brothers.png',
      text: "Called on the first night. Acknowledge each other and can rely on each other. Every other night, they wake up and agree in silence on any decisions needed to save the village. (Really useful if you know sign language)."
    },
    {
      title: 'Fox',
      image: '/assets/img/fox.png',
      text: "Called every night. Choose a group of three players next to each other and the moderator will nod if at least one of them is a werewolf. If none of them are, the fox loses their powers for the rest of the game. The fox does not have to use their power each night. They do not get to see the players’ cards."
    },
    {
      title: 'Bear Tamer',
      image: '/assets/img/bear-tamer.png',
      text: "Each morning, after the results of the night are revealed, the narrator makes a sign (grunts) if a werewolf is now next to the bear tamer (the bear smells danger). Only players next to this character are taken into account. If this character is turned by Daddy Wolf, the narrator makes a sign every morning."
    },
    {
      title: 'Stuttering Judge',
      image: '/assets/img/stuttering-judge.png',
      text: "Called on the first night. Shows the narrator a special sign. When this sign is shown during nominations / voting, another round of voting will commence after the first character has been lynched. This can be done once per game."
    },
    {
      title: 'Knight with the Rusty Sword',
      image: '/assets/img/knight-with-the-rusty-sword.png',
      text: "If killed, he contaminates the first werewolf to the left of him with rust. The werewolf will then be eliminated after the next night dying from this contamination."
    },
    {
      title: 'Thief',
      image: '/assets/img/thief.png',
      text: "Called on the first night. Two extra villager cards are put in the mix; after they are all dealt out, the two remaining extra cards are put in the middle of the circle. The thief is allowed to look at these cards in the night and exchange his for one of them but he doesn’t have to unless both cards are werewolves. He’ll play that character for the rest of the game."
    },
    {
      title: 'Devoted Servant',
      image: '/assets/img/devoted-servant.png',
      text: "After someone has been lynched but before their card is revealed, this character can reveal themselves and swap their card with the one about to die - not revealing the card that the person had. If the card has special powers, the powers are reset and the character begins as if from the first night. They don’t take on any extra special effects that the eliminated player may have had (e.g. lover, infected, cupid, town crier). If they were Charmed / Town Crier / Mayor before, they no longer are. If they were infected, they stay infected. If they become the piper, the previously charmed players are revealed to them in the night. New cards aren’t dealt if they are the Actor, Town Crier or Gypsy, only unused ones remain."
    },
    {
      title: 'Actor',
      image: '/assets/img/actor.png',
      text: "Called every night. The moderator chooses 3 cards with special abilities and places them face up in the middle of the circle. Each night, when called, the Actor may pick one of the special cards to use in the night. Once used, the card is removed. Cards cannot be werewolf cards. The Thief’s and Actor’s cards are separate."
    },
    {
      title: 'Wild-Child',
      image: '/assets/img/wild-child.png',
      text: "Called on the first night. Chooses someone to idolise. They continue as a villager unless their idol is killed, which is when they will turn into a werwolf and continue to play as a werewolf. They may vote against their idol in village votes. The moderator doesn’t reveal the true nature of the Wild-Child when they die."
    },
    {
      title: 'Angel',
      image: '/assets/img/angel.png',
      text: "The game begins with a village vote rather than the first night. Their aim is to get eliminated either in the vote or killed by the werewolves in the first round. If so, he wins and a new game begins without them. If they survive, they must continue the rest of the game as a villager."
    },
    {
      title: 'Piper',
      image: '/assets/img/piper.png',
      text: "Called every night. Charms two people every night. Their aim is to charm everyone in the whole village, they win once this is fulfilled (even if it is via a village lynch or a werewolf devour). If he is infected by Daddy Wolf, he abandons his previous goal and becomes a simple werewolf. He cannot charm himself, the Defender can’t protect against it, Witch can’t heal it, Werewolves’ aren’t immune to it, Lovers don’t transmit it to each other. Players keep their normal characteristics."
    },
    {
      title: 'Prejudiced Manipulator',
      image: '/assets/img/prejudiced-manipulator.png',
      text: "Moderator divides the village into two groups before the game begins (into obvious groups e.g. gender, size, glasses, age etc.) and announces it to everyone. This character has to try and eliminate everyone in the group he isn’t in. Only then will he win the game. If he is infected, he becomes a simple werewolf."
    }
  ];

}]);
