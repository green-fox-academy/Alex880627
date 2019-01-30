'use strict';

export { }

/* Post-it
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

class PostIt {
  backgroundColor:string;
  text:string;
  textColor:string;
  constructor(addBGcolor:string,addText:string,addTxtColor:string){
    this.backgroundColor = addBGcolor;
    this.text = addText;
    this.textColor = addTxtColor;
  }
}

let post1 = new PostIt('orange','blue','idea 1'); 
let post2 = new PostIt('pink','black','Awesome'); 
let post3 = new PostIt('yellow','green','Superb!'); 
