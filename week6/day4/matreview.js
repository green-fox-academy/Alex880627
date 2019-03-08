'use strict';

/* nmp init -y
npm install express
code package.json
code .gitignore
code server.json
npm install nodemon 
you can start server from diferent folder: (path.join(__dirname + '/server.html')*/

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/assets', express.static('assets'));


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/server.html'));
});

app.get('/doubling', (req,res) => {
  let input = req.query.input;
  console.log(input);
});

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));

