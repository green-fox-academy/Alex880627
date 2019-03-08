"use strict";
function start(id){
  let elementGet = document.getElementById(id).getAttribute('src');
  console.log(elementGet);
  document.getElementsByClassName('galery-pic')[0].setAttribute('src', elementGet);
}

let i = 0;
function movePic(direction){
  if (direction === 'right' && i < document.getElementsByClassName('img-small').length-1){
    i++;
    let elementSrc = document.getElementsByClassName('img-small')[i].getAttribute('src');
    document.getElementsByClassName('galery-pic')[0].setAttribute('src', elementSrc);
  } if(direction === 'left' && i > 0){
    i--;
    let elementSrc = document.getElementsByClassName('img-small')[i].getAttribute('src');
    document.getElementsByClassName('galery-pic')[0].setAttribute('src', elementSrc);
  }
}









