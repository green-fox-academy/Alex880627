'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

/* app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/assets/index.html'));
}); */

app.get('/', (req,res) => {

  let infos = {
    title: 'my first dinamic page',
    name: 'Panka',
    age: 26,
  }
  res.render('index.ejs', infos);
});

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));