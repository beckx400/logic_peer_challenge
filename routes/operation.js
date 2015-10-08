var express = require('express');
var router = express.Router();

var answer = 0;

/* GET users listing. */
router.post('/add', function(req, res) {
  //WHATS THE DEAL WITH THESE BEING STRINGS AND CONCATINATING
  answer = parseInt(req.body.num1) + parseInt(req.body.num2);
});
router.post('/subtract', function(req, res) {
  answer = (req.body.num1) - (req.body.num2);
});
router.post('/multiply', function(req, res) {
  answer = (req.body.num1) * (req.body.num2);
});
router.post('/divide', function(req, res) {
  answer = (req.body.num1) / (req.body.num2);
});


router.get('/answer', function(req, res){
  res.json(answer);
});
module.exports = router;
