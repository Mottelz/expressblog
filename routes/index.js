var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Help', goal: 'There is a man at the bottom of a well. He has no intention of leaving this well. But he will. Because he must.' });
});

module.exports = router;
