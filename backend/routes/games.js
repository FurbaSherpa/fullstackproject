const express = require('express');
const GameModel = require('../models/games');

const router = express.Router();


router.get('/games', (req, res, next) => {
  console.log('GET: Games lists');
  GameModel.find(function (err, post){
    if (err)
      console.log(err)
    else 
      res.json(post)
  });

});
module.exports = router;