'use strict';

class Garden {
  gardenArr: any[];
  constructor(addGardenArr: any[] = []) {
    this.gardenArr = addGardenArr;
  }
  addTreeOrFlower(...plant: any) {
    this.gardenArr = plant;
    }
  waterTheGarden(water: number) {
    this.gardenArr.forEach(plant => {
     return plant.watering(water / this.gardenArr.length);
    });
  }
}

class Plant {
  currentWater: number;
  color: string;
  type: string;
  constructor(addColor: string, addType: string, addCurrentWater: number) {
    this.color = addColor;
    this.type = addType;
    this.currentWater = addCurrentWater;
  }
}

class Tree extends Plant {
  constructor(addColor: string, addType: string, addCurrentWater: number = 0) {
    super(addColor, addType, addCurrentWater);
    this.color = addColor;
    this.type = addType;
    this.currentWater = addCurrentWater;
  }
  watering(water: number) {
    if (this.currentWater < 10) {
      this.currentWater += water * 0.4;
      if (this.currentWater < 10) {
        console.log(`The ${this.color} ${this.type} needs water`)
      }
      else {
        console.log(`The ${this.color} ${this.type} doesn't need water`)
      }
    }
    else if (this.currentWater >= 10) {
      console.log(`The ${this.color} ${this.type} doesn't need water`)
    }
  }
}

class Flower extends Plant {
  constructor(addColor: string, addType: string, addCurrentWater: number = 0) {
    super(addColor, addType, addCurrentWater);
    this.color = addColor;
    this.type = addType;
    this.currentWater = addCurrentWater;
  }
  watering(water: number) {
    if (this.currentWater < 5) {
      this.currentWater += water * 0.75;
      if (this.currentWater < 5) {
        console.log(`The ${this.color} ${this.type} needs water`)
      }
      else {
        console.log(`The ${this.color} ${this.type} doesn't need water`)
      }
    }
    else if (this.currentWater >= 5) {
      console.log(`The ${this.color} ${this.type} doesn't need water`)
    }
  }
}
let garden = new Garden;

let pipacs = new Flower('yellow', 'Flower');
let rose = new Flower('blue', 'Flower');
let almaFa = new Tree('purple', 'Tree');
let narancsFa = new Tree('orange', 'tree');

garden.addTreeOrFlower(pipacs, rose, almaFa, narancsFa);

/* console.log(garden.gardenArr); */
garden.waterTheGarden(40);
garden.waterTheGarden(70);



