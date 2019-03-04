"use strict";

export class Card {
  value: any;
  color: string;
  constructor(value: string, color: string) {
    this.value = value;
    this.color = color;
  }
}

let testCards: Card[] = [
  new Card("10", "club"),
  new Card("J", "club"),
  new Card("Q", "club"),
  new Card("K", "club"),
  new Card("A", "club")
];

function bubleSort(arrayToCheck: Card[]) {
  let numberHands = convertHands(arrayToCheck);
  let straightArray: number[] = [];
  numberHands.forEach(element => {
    straightArray.push(element.value);
  });
  for (let i: number = 0; i < straightArray.length; i++) {
    for (let j: number = 0; j < straightArray.length - i - 1; j++) {
      if (straightArray[j] > straightArray[j + 1]) {
        let temp = straightArray[j];
        straightArray[j] = straightArray[j + 1];
        straightArray[j + 1] = temp;
      }
    }
  }
  return straightArray;
}

function convertHands(cardArray: Card[]) {
  for (let i = 0; i < cardArray.length; i++) {
    if (isNaN(Number(cardArray[i].value)) === true) {
      if (cardArray[i].value === "J") {
        cardArray[i].value = 11;
      } else if (cardArray[i].value === "Q") {
        cardArray[i].value = 12;
      } else if (cardArray[i].value === "K") {
        cardArray[i].value = 13;
      } else if (cardArray[i].value === "A") {
        cardArray[i].value = 14;
      }
    } else {
      cardArray[i].value = Number(cardArray[i].value);
    }
  }
  return cardArray;
}

function checkForFlush(cardArray: Card[]): boolean {
  let flushCounter = 0;
  for (let i = 0; i < cardArray.length - 1; i++) {
    cardArray[i].color === cardArray[i + 1].color ? (flushCounter += 1) : null;
  }
  return flushCounter === cardArray.length - 1 ? true : false;
}

function checkHighestCard(cardArray: Card[]): number {
  let higestNumber:number = 0;
  let array:number [] = bubleSort(cardArray);
  array.forEach(element => {
    element > higestNumber? higestNumber = element:null;
  });
  return higestNumber;
}

function checkForStraight(cardArray: Card[]): boolean {
  let numberArray: number[] = bubleSort(cardArray);
  for (let i = 0; i < cardArray.length; i++) {
    if (numberArray[i] !== numberArray[i + 1] - 1) {
      return false;
    }
    return true;
  }
}

function checkForPairs(cardArray: Card[]): number {
  let cardPairIndex:number = 0;
  let straightArray: number[] = bubleSort(cardArray);
  for (let i = 0; i < straightArray.length; i++) {
    if (straightArray[i] === straightArray[i + 1]) {
      cardPairIndex++;
    } else {
      return cardPairIndex;
    }
  }
}

export function comparePokerHands(hand1: Card[], hand2: Card[]) {
  return "Hero is winning";
}

console.log(checkForStraight(testCards));
