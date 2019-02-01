'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let line: number = 150;
let angle: number = 15 * Math.PI / 180;
let color: string = 'black';

function drawTree(startX: number, startY: number, len: number, angle: number) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.strokeStyle = color;
  ctx.stroke();

  if (len < 10) {
    ctx.restore();
    return;
  }
  drawTree(0, -len, len * 0.8, -15);
  drawTree(0, -len, len * 0.8, 15);
  ctx.restore();
}

drawTree(300, canvas.height, 100, 0); 

class Bubbles {
  x: number;
  y: number;
  relx: number;
  rely: number
  radius: number;
  opacity: number;
  constructor(addX: number, addY: number, addRelX: number, addRelY: number, addRadius: number, addOpacity: number) {
    this.x = addX;
    this.y = addY;
    this.relx = addRelX;
    this.rely = addRelY;
    this.radius = addRadius;
    this.opacity = addOpacity;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.relx = -this.relx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.rely = -this.rely;
    }
    this.x += this.relx;
    this.y += this.rely;
  }
}

let bublesArray: any[] = [];

for (let i: number = 300; i > 0; i--) {
  let radius = 2 + Math.random() * 3;
  let x = 200;
  let y: number = 200;
  let relx = (Math.random() + 2) * (i / 100);
  let rely = (Math.random() - 1) * 2;
  let opacity = (Math.floor((Math.random() * 5))) * 0.1;
  bublesArray.push(new Bubbles(x, y, relx, rely, radius, opacity));
}

function animate1() {
  requestAnimationFrame(animate1);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTree(300, canvas.height, 100, 0);
  for (let i: number = 0; i < bublesArray.length; i++) {
    bublesArray[i].update();
    bublesArray[i].draw();
  }
}

animate1();
