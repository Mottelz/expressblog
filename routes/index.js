var express = require('express');
var router = express.Router();
var goal = 'On the face of her phone Whyline programs a message to herself. Every day is one day less.';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Help', goal: goal });
});

/*GET Jail*/
router.get('/jail', function(req, res, next) {
    var title = 'Prison';
    var human = 'Mark';
    var goal = 'To escape';
    res.render('jail', { title: title, goal: goal, human: human });
});
module.exports = router;
