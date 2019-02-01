'use strict';
export { }

/* Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() */

class Student {
  name:string;
  constructor(name:string){
    this.name = name;
  }
  learn() {
console.log('my brain is getting huuuuge');
  }
  question(input:Teacher) {
    console.log('may I ask a question?')
    input.answer();
  }
}

class Teacher {
  name:string;
  constructor(name:string){
    this.name = name;
  }
  teach(input:Student) {
input.learn();
  }
  answer() {
    console.log('of course, dont keep it')
  }

}
let Marika:any = new Teacher('Marika');
let Feri:any = new Student('Feri');
console.log(Feri.question(Marika));
console.log(Marika.teach(Feri));