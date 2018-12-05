const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// *********** Include the Api routes ***********
const playerRoutes = require("./routes/players");
const gameRoutes = require("./routes/games");

// *********** Connect to Mongo  npm i -g nodemon ***********
console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://Testuser:password1@ds038888.mlab.com:38888/gamedb')//'mongodb://admin:admin123@ds123664.mlab.com:23664/full_stack'
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

// ******** Setup the Api routes ***********
app.use("/playerRoutes", playerRoutes);
app.use("/gameRoutes", gameRoutes);

module.exports = app;