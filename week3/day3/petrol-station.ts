'use strict';
export { }

/* 
Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

class Station {
  gasAmount: number;
  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }
  refill(fill:Car){
    fill.gasAmount +=30;
    this.gasAmount -=30;
  }
}

class Car {
  gasAmount: number;
  capacity: number;
  constructor(currentGas: number = 0, capacity: number =100) {
    this.capacity = capacity;
    this.gasAmount = currentGas;
  }
}

let Mazda = new Car(30);
let Shell = new Station(100);
Shell.refill(Mazda);
console.log(Mazda.gasAmount);
