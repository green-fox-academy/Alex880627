const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const mysql = require("mysql");
require('dotenv').config();

app.use("/assets", express.static("assets"));
app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//To send static files
app.get("/posts", (req, res) => {
  res.sendFile(path.join(__dirname + "/posts.html"));
});

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});

app.get("/", function(req, res) {
  res.send("hello word");
});

app.get("/posts", function(req, res) {
  conn.query("SELECT * FROM posts", function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send("Database error");
      return;
    }
    res.send(rows);
  });
});

app.post("/posts", function(req, res) {
  let body = req.body;

  conn.query(
    `INSERT INTO posts (title, timestamp, url, score) VALUES
  ('${body.title}',NOW(),'${body.url}','1');`,
    function(err, rows) {
      if (err) {
        console.log(err.toString());
        console.log(err);
        res.status(500).send("Database error");
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id=${rows.insertId}`, function(
        err,
        rows
      ) {
        if (err) {
          console.log(err.toString());
          console.log(err);
          res.status(500).send("Database error");
          return;
        }
        res.send(rows);
      });
    }
  );
});

app.put("/posts/:id/upvote", function(req, res) {
  let id = req.params.id;
  conn.query(`UPDATE posts SET score = score+1 WHERE id=${id};`, function(
    err,
    rows
  ) {
    if (err) {
      console.log(err.toString());
      console.log(err);
      res.status(500).send("Database error");
      return;
    }
    conn.query(`SELECT * FROM posts WHERE id=${id}`, function(err, rows) {
      if (err) {
        console.log(err.toString());
        console.log(err);
        res.status(500).send("Database error");
        return;
      }
      res.send(rows);
    });
  });
});

app.put("/posts/:id/downvote", function(req, res) {
  let id = req.params.id;
  conn.query(`UPDATE posts SET score = score-1 WHERE id=${id};`, function(
    err, rows
  ) {
    if (err) {
      console.log(err.toString());
      console.log(err);
      res.status(500).send("Database error");
      return;
    }
    conn.query(`SELECT * FROM posts WHERE id=${id}`, function(err, rows) {
      if (err) {
        console.log(err.toString());
        console.log(err);
        res.status(500).send("Database error");
        return;
      }
      res.send(rows);
    });
  });
});

