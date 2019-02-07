'use strict';

export class Apple {
  name:string;
constructor(addName:string = 'apple'){
this.name = addName;
}
  getApple(){
    return this.name;
  }
}
