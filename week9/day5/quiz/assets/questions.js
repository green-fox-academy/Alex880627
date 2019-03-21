function loadContent() {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "/api/questions", true);
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);
    let contentWrapper = document.querySelector("#content");
    content.forEach(element => {
      let questionParagraph = document.createElement("p");
      let button = document.createElement("button");
      button.innerText = "Delete";
      questionParagraph.innerText = element.question;
      button.id = element.id;
      contentWrapper.appendChild(questionParagraph);
      contentWrapper.appendChild(button);
      button.addEventListener("click", e => {
        id = e.target.id;
        deleteContent(id);
      });
    });
  };
  httpRequest.send();
}

let submit = document.querySelector("#form");
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    addNewContent();
  });

loadContent();

function deleteContent(id) {
  let http = new XMLHttpRequest();
  let url = `/api/questions/${id}`;
  http.open("DELETE", url);
  http.send();
}

function addNewContent() {

  let http = new XMLHttpRequest();
  let url = `/api/questions`;
  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json");

  let question = document.querySelector("#question").value;
  let answer1 = document.querySelector("#answer1").value;
  let answer2 = document.querySelector("#answer2").value;
  let answer3 = document.querySelector("#answer3").value;
  let answer4 = document.querySelector("#answer4").value;
  let radio1 = document.querySelector("#answer1-radio").checked;
  let radio2 = document.querySelector("#answer2-radio").checked;
  let radio3 = document.querySelector("#answer3-radio").checked;
  let radio4 = document.querySelector("#answer4-radio").checked;
  
  let arrayRadio = [radio1, radio2, radio3, radio4];
  for (let i = 0; i < arrayRadio.length; i++) {
    if (arrayRadio[i] === true) {
      arrayRadio[i] = 1;
    } else {
      arrayRadio[i] = 0;
    }
  }
  
  http.send(
    JSON.stringify({
      question: `${question}`,
      answers: [
        { answer_1: `${answer1}`, is_correct: `${arrayRadio[0]}` },
        { answer_2: `${answer2}`, is_correct: `${arrayRadio[1]}` },
        { answer_3: `${answer3}`, is_correct: `${arrayRadio[2]}` },
        { answer_4: `${answer4}`, is_correct: `${arrayRadio[3]}` }
      ]
    })
  );
}
