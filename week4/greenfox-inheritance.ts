/* Create a Person class with the following fields:

name: the name of the person
age: the age of the person (integer number)
gender: the gender of the person (male / female)
And the following methods:

introduce(): prints out 'Hi, I'm name, a age year old gender.'
getGoal(): prints out 'My goal is: Live for the moment!'
And the following constructors:

Person(name, age, gender)
Person(): sets name to Jane Doe, age to 30, gender to female */

'use strict';

export { }

class Person {
  name: string;
  age: number;
  gender: string;
  constructor(addName: string = 'Jane Doe',
    addAge: number = 30,
    addGender: string = 'female') {
    this.name = addName;
    this.age = addAge;
    this.gender = addGender;
  }
  introduce() {
    console.log(`Hi, I\'${this.name}, a ${this.age} year old ${this.gender}`);
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}


class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(
    addName: string = 'Jane Doe',
    addAge: number = 30,
    addGender: string = 'female',
    addPreviousOrganization: string = 'The School of Life',
    addSkippedDays: number = 0) {
    super(addName, addAge, addGender);
    this.previousOrganization = addPreviousOrganization;
    this.skippedDays = addSkippedDays;
  }
  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }
  introduce() { console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.previousOrganization} days from the course already`) }
  skipDays(numberOfDays: number) {
    this.skippedDays = this.skippedDays + numberOfDays;
  }
}

class Mentor extends Person {
  level: string;
  constructor(addName: string = 'Jane Doe',
    addAge: number = 30,
    addGender: string = 'female',
    addLevel: string = 'intermediate') {
    super(addName, addAge, addGender);
    this.level = addLevel;
  }
  introduce() {
    console.log('Hi, I\'m' + this.name + ', a ' + this.age + ' year old ' + this.gender + '.' + this.level + ' mentor.');
  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;
  constructor(addName: string = 'Jane Doe',
    addAge: number = 30,
    addGender: string = 'female',
    addCompany: string = 'Google',
    addHiredStudents: number = 0) {
    super(addName, addAge, addGender);
    this.company = addCompany;
    this.hiredStudents = addHiredStudents;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }
  hire() {
    this.hiredStudents++;
  }
  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];
  constructor(
    addName: string, addStudents: Student[] = [], addMentors: Mentor[] = []
  ) {
    this.name = addName;
    this.students = addStudents;
    this.mentors = addMentors;
  }
  addStudent(addStudent: Student) {
    this.students.push(addStudent);
  }
  addMentor(addMentor: Mentor) {
    this.mentors.push(addMentor);
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();