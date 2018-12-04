const express = require('express');
const PlayerModel = require('../models/player');

const router = express.Router();


router.get('', (req, res, next) => {
  console.log('GET: Players lists');
  PlayerModel.find(function (err, post){
    if (err)
      console.log(err)
    else 
      res.json(post)
  });

});

router.get('find/:id', (req, res, next) => {
  console.log('GET: Players by id:' + req.params.id);
  PlayerModel.findById(req.param.id, function (err, post){
    if (err)
      console.log(err)
    else 
      res.json(post)
  });

})

router.post('/add', (req, res, next) => {
  console.log('ADD: Player');
  PlayerModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

router.post('/update/:id', (req, res, next) => {
  console.log('UPDATE: Player by id: ' + req.params.id);
  PlayerModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

router.delete('/:id', (req, res, next) => {
  console.log('DELETE: Student by id: ' + req.params.id);
  PlayerModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json("Deleted");
  });

});

module.exports = router;