'use strict';

export { }

/* Counter
Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */


class Counter {
  integer:number = 0;
  resetInt:number = 0;
  constructor(addInteger:number){
     this.integer = addInteger;
     this.resetInt = addInteger;
  }
  add() {
    return this.integer = this.integer + 1;
    
  }
  get() {
    return this.integer;
  }
  reset() {
    this.integer = this.resetInt;
    return this.integer;
  }
}

let calc = new Counter(50);
calc.add()
calc.add()
calc.add()
calc.add()
console.log(calc.get());
console.log(calc.reset());
console.log(calc.get());