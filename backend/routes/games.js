const express = require('express');
const PlayerModel = require('../models/game');

const router = express.Router();


router.get('/games', (req, res, next) => {
  console.log('GET: Games lists');
  PlayerModel.find(function (err, post){
    if (err)
      console.log(err)
    else 
      res.json(post)
  });

});
module.exports = router;