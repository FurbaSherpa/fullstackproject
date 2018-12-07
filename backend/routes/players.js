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

router.get('/:id', (req, res) => {
  console.log('GET: Players by id:' + req.params.id);
  let idTemp = req.params.id;
  PlayerModel.findById (idTemp, (err, player) => {
    console.log(player)
    if (err)
      console.log(err)
    else 
      res.json(player)
  });

})

router.post('/add', (req, res, next) => {
  console.log('ADD: Player');
  PlayerModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})


router.post('/update/:id',(req, res) => {
  PlayerModel.findById(req.params.id, (err, player) => {
      if (!player)
          return next(new Error('Could not load Document'));
      else {
        player.username = req.body.username;
        player.rank = req.body.rank;
        player.score = req.body.score;
        player.time = req.body.time;
        player.favorite = req.body.favorite;
        player.customer = req.body.customer;
        player.status = req.body.status;

          player.save().then(player => {
              res.json('Update done');
          }).catch(err => {
              res.status(400).send('Update failed');
          });
      }
  });
});

router.get('/delete/:id', (req, res) => {
  console.log('DELETE: Student by id: ' + req.params.id);
  PlayerModel.findByIdAndRemove({_id: req.params.id}, req.body, (err, post) => {
    if (err)
      res.json(err);
    else
      res.json("Deleted");
  });

});

module.exports = router;