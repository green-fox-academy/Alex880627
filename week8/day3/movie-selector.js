"use strict";

const movies = {
  "":"",
  Moon: "sci-fi",
  "2001 Space odessy": "sci-fi",
  Contact: "sci-fi",
  "Darkest hour": "drama",
  "There will be blood": "drama",
  "American beauty": "drama",
  "Airplane!": "comedy",
  Deadpool: "comedy",
  "Wayne's World": "comedy"
};

let genre = document.getElementById("genre");
let movie = document.getElementById("movie");

genre.addEventListener("change", e => {
  let oldValue = movie.getElementsByTagName("option");
  let value = e.target.value;
  for (let i = 0; i < Object.values(movies).length; i++) {
    if (Object.values(movies)[i] === value) {
      oldValue[i].hidden = false;
      console.log(oldValue[i])
    } else {
      oldValue[i].hidden = true;
    }
  }
});
