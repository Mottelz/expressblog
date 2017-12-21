var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;


//Using mongoose to accept mongoDB
//var dburl = 'mongodb://mottel:H3r3inbepoints@ds145168.mlab.com:45168/helpless';
//mongoose.connect(dburl);

//Schema Post
/*var BlogpostSchema = new Schema({
    title : String,
    body : String,
    pubdate : { type: Date, default: Date.now },
    author : String,
    psid: Number
});

var BlogpostModel = mongoose.model('Blogpost', BlogpostSchema);*/



/*Homepage Render*/
router.get('/', function(req, res, next) {
    // res.render('home', {webtitle: "Mottelz - Home"});
    var file_path = "../content/poems/1.json";
    var content = require(file_path);
    res.render('poems',{title: content.title, poem: content.poem,})
});




/* GET post page.*/
router.get('/:posttype/:psid?', function(req, res, next) {
        var postid = req.params.psid;
        var posttype = req.params.posttype;


        var file_path = "../content/" + posttype + "/" + postid + ".json";
        var content = require(file_path);


        if (posttype == "essays" || posttype == "dev") {
        res.render('index', { type: posttype, title: content.title, date: content.date, post: content.post, webtitle: content.webtitle, author: content.author, prev: content.prev, next: content.next}); }

        if (posttype == "poems"){
            res.render('poems',{title: content.title, poem: content.poem,})
        }


    });

module.exports = router;