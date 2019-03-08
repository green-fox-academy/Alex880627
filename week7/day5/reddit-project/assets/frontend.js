"use strict";

const httpRequest = new XMLHttpRequest();

httpRequest.open("GET", "/posts", true);

httpRequest.onload = () => {
  console.log('fck');
  let content = JSON.parse(httpRequest.responseText);
  
};

httpRequest.send();