'use strcit';

import {comparePokerHands, Card} from './poker'


const test = require('tape');

test("test output for compareing pokerhands", t => {
  let arrayOfHeroCards: Card[] = [
    new Card("10", "club"),
    new Card("J", "club"),
    new Card("Q", "club"),
    new Card("K", "club"),
    new Card("A", "club")
  ];
  let arrayOfVillainCards: Card[] = [
    new Card("7", "club"),
    new Card("J", "club"),
    new Card("8", "club"),
    new Card("K", "club"),
    new Card("A", "club")
  ];
  let actual: any = comparePokerHands(arrayOfHeroCards, arrayOfVillainCards);
  let expected: string = "Hero is winning";
  t.deepEqual(actual, expected, "the test passed with pokerhand object arrays");
  t.end();
});
