'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

app.listen(PORT,()=>{
  console.log(`The server is running on port: ${PORT}`);
})

app.get('/', (req, res) => {
  res.render('index.ejs', {data:req.query})
});