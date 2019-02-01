'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let line: number = 150;
let angle: number = 20 * Math.PI / 180;
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

class smallTree {
  x: number;
  y: number;
  relx: number;
  rely: number
  opacity: number;
  angle: number;
  len:number;
  constructor(addX: number, addY: number, addRelX: number, addRelY: number,
     addOpacity: number, addLen:number, addAngle:number) {
    this.x = addX;
    this.y = addY;
    this.relx = addRelX;
    this.rely = addRelY;
    this.opacity = addOpacity;
    this.len = addLen;
    this.angle = addAngle;
  }
  draw () {
      ctx.beginPath();
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle * Math.PI / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -this.len);
      ctx.strokeStyle = color;
      ctx.stroke();
    
      if (this.len  < 0.3) {
        ctx.restore();
        return;
      }
      drawTree(0, -this.len, this.len * 0.5, -15);
      drawTree(0, -this.len, this.len * 0.5, 15);
      ctx.restore();
    }
    
  
  update(){
    if (this.x > canvas.width || this.x < 0) {
      this.relx = -this.relx;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.rely = -this.rely;
    }
    this.x += this.relx;
    this.y += this.rely;
  }
}

let bublesArray: any[] = [];

for (let i: number = 300; i > 0; i--) {
  let radius = 2 + Math.random() * 3;
  let x: number = 220;
  let y: number = 280;
  let relx:number = (Math.random() + 3) * (i / 100);
  let rely:number = (Math.random() - 1);
  let opacity:number = (Math.floor((Math.random() * 5))) * 0.1;
  let angle:number = 25; 
  let len:number = 4;
  bublesArray.push(new smallTree(x, y, relx, rely, opacity, angle, len));
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
