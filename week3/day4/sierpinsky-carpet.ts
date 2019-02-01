'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth2: number = 600;
let x: number = 0;
let y: number = 0;
let maxWidth: number = canvasWidth / 30;

class Cubes {
  x: number;
  y: number;
  maxWidth: number;
  constructor(addX: number, addY: number, addMaxWidth: number) {
    this.x = addX;
    this.y = addY;
    this.maxWidth = addMaxWidth;
  }
  drawRect(x: number, y: number, maxWidth: number) {
    ctx.fillRect(this.x + this.maxWidth / 9, this.y + this.maxWidth / 9, this.maxWidth / 9, this.maxWidth / 9);
    ctx.fill();
  }
}
let cubeArr: any[] = [];
let cube: Cubes = new Cubes(x, y, maxWidth);


for (let i = 0; i < maxWidth; i++) {
  for (let a = 0; a < maxWidth; a++) {
    let cube: Cubes = new Cubes(x, y, maxWidth);
    cubeArr.push(cube[i]);
    x = x + (maxWidth / 9) * 2;
  }
  y = y + (maxWidth / 9) * 2;
}

for()



