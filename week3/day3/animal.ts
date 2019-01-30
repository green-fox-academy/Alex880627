'use strict';

export { }


/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {
  hunger: number;
  thirst: number;

  constructor(animalHunger: number = 50, animalThirst: number = 50) {
    this.hunger = animalHunger;
    this.thirst = animalThirst;
  }
  eat() {
    return this.hunger = this.hunger - 1;
  }
  drink() {
    return this.thirst = this.thirst - 1;
  }
  play() {
    this.hunger = this.hunger + 1;
    this.thirst = this.thirst + 1;
  return 'my hunger is'+this.hunger+'and my thirst is'+this.thirst;
  }
}

let Elephant = new Animal();

console.log(Elephant.play());