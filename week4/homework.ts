
'use strict';

class Person {
  name: string;
  age: number;
  gender: string;
  constructor(addName: string = 'Jane Doe', addAge: number = 30, addGender: string = 'female') {
    this.name = addName;
    this.age = addAge;
    this.gender = addGender;
  }
  introduce() {
    console.log('Hi, I\'m' + this.name + ', a ' + this.age + ' year old ' + this.gender + '.');
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}


class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;
  constructor(addName: string = 'Jane Doe', addAge: number = 30, addGender: string = 'female', addOrganization: string = 'School of life', addDaysSkipped: number = 0) {
    this.name = addName;
    this.age = addAge;
    this.gender = addGender;
    this.skippedDays = addDaysSkipped;
    this.previousOrganization = addOrganization;
  }
  introduce() {
    console.log('"Hi, I\'m' + this.name + ', a ' + this.age + ' year old ' + this.gender + ' from ' + this.previousOrganization +' who skipped ' +this.skippedDays+ 'days from the course already.');
  }
  getGoal() {
    console.log('Be a junior software developer.');
  }
}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level:string;
  constructor(addName: string = 'Jane Doe',
   addAge: number = 30, 
   addGender: string = 'female',
    addLevel:string = 'intermediate') {
    this.name = addName;
    this.age = addAge;
    this.gender = addGender;
    this.level = addLevel;
  }
  introduce() {
    console.log('Hi, I\'m' + this.name + ', a ' + this.age + ' year old ' + this.gender + '.' +this.level + ' mentor.');
  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}

let mano = new Mentor;
