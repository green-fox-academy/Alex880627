'use strict';

export{}

/* Create 5 trees
Store the data of them in variables in your program
for every tree the program should store its'
type
leaf color
age
sex
you can use just variables, or lists and/or maps
 */

class Tree {
  type:string;
  leaf:string;
  age:number;
  sex:string
  constructor(leaf:string,age:number,sex:string ='female',type:string = 'juhar'){
     
     this.leaf = leaf;
     this.age = age;
     this.sex = sex;
     this.type = type;
    }

}

let juhar = new Tree('ovális',32,'female');

console.log(juhar);


import {  } from '../day2/copy-file';