'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.listen(PORT, () => {
  console.log(`Server is running at port number: ${PORT}`);
});
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];

  res.render('index.ejs', todos)
});