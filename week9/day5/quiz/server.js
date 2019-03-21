const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
let conn = null;
require("dotenv").config();

try {
  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
  });
  console.log(`Database connection to ${process.env.DB_DATABASE} was successful`);
} catch (e) {
  console.log(`Database connection to ${process.env.DB_DATABASE} has failed`);
  console.error(e);
}

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/assets", express.static("assets"));

app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/questions", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/questions.html"));
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

function errorHandling(err, statusCode=500) {
  console.log(err.toString());
  res.status(statusCode).send("Database error");
  return;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)); //The maximum is inclusive and the minimum is inclusive 
}

app.get("/api/game", function(req, res) {
  conn.query("SELECT * FROM questions ", function(err, rows) {
    if (err) {
      errorHandling(err);
    }
    let ammountOfQuestions = Object.keys(rows).length;
    let randomQuestionNumber = getRandomIntInclusive(1,ammountOfQuestions);
    let packetNumbers = Object.keys(rows)[randomQuestionNumber];
    let questionId = rows[packetNumbers].id;
    let question = rows[packetNumbers].question;
    
    conn.query(`SELECT * FROM answers WHERE answers.question_id=${questionId}`, function(err, rows){
      if(err){
        errorHandling(err);
      }
      let result = {
        "id": questionId,
        "question": question,
        "answers":rows
      }
      res.send(result);
    })
  });
});

app.get("/api/questions", function(req,res){
  conn.query(`SELECT id, question FROM questions`,function(err, rows){
    if(err){
      errorHandling(err);
    }
    res.send(rows);
  })
})

app.post("/api/questions", function(req,res){
  let body = req.body;
  conn.query(`INSERT INTO questions (question) VALUES ('${body.question}')`,function(err, rows){
    if(err){
      errorHandling(err);
    }
    let insertId = rows.insertId;   
    conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES
    (${insertId}, '${body.answers[0].answer_1}', ${body.answers[0].is_correct}),
    (${insertId}, '${body.answers[1].answer_2}', ${body.answers[1].is_correct}),
    (${insertId}, '${body.answers[2].answer_3}', ${body.answers[2].is_correct}),
    (${insertId}, '${body.answers[3].answer_4}', ${body.answers[3].is_correct})`,function(err,rows){
      if(err){
        errorHandling(err);
      }
    })
  })
  res.end();
})

app.delete("/api/questions/:id", function(req,res){
  let query = req.query.id;
  console.log(query);
  let id = req.params.id;
    conn.query(`DELETE FROM answers WHERE question_id=${id}; DELETE FROM questions WHERE id=${id}`,function(err,rows){
      if(err){
        errorHandling(err);
      }
    res.end();
  })
})