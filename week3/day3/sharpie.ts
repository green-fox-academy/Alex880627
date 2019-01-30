'use strict';

export { }

/* Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use () the sharpie objects
which decreases inkAmount */

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;
  constructor(addColor: string, addWidth: number, addink: number = 100) {
    this.color = addColor;
    this.width = addWidth;
    this.inkAmount = addink;
  }

  decreseInk() {
    this.inkAmount = this.inkAmount - 1;
    return this.inkAmount;
  }
}

let sh1 = new Sharpie('white',25);

console.log(sh1.decreseInk());