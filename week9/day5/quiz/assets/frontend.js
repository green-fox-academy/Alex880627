let score = 0;



function showNewQuestion() {  
  let http = new XMLHttpRequest();
  let url = "api/game";
  http.open("GET", url, true);
  http.onload = () => {
    const content = http.responseText;
    const jsonContent = JSON.parse(content);
    let question = jsonContent.question;
    let answers = jsonContent.answers;
    let questionDiv = document.querySelector("#question-wrapper");
    let scoreContainer = document.querySelector("#points");
    questionDiv.innerHTML = question;
    let allAnswersDiv = document.querySelectorAll(".answers");
    for (let i = 0; i < answers.length; i++) {
      allAnswersDiv[i].innerHTML = answers[i].answer;
      allAnswersDiv[i].addEventListener("click", () => {
        if (answers[i].is_correct === 1) {
          allAnswersDiv[i].setAttribute("style", "background-color:green");
          scoreContainer.innerHTML = `SCORE: ${score}`;
          setTimeout(() => {
            showNewQuestion();
            allAnswersDiv[i].setAttribute("style", "background-color:white");
          }, 1000);
        } else {
          allAnswersDiv[i].setAttribute("style", "background-color:red");
          setTimeout(() => {
            showNewQuestion();
            allAnswersDiv[i].setAttribute("style", "background-color:white");
          }, 1000);
        }
      });
    }
  };
  http.send();
}

showNewQuestion();