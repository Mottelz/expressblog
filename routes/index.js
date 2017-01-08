var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Using mongoose to accept mongoDB
var dburl = 'mongodb://mottel:H3r3inbepoints@ds145168.mlab.com:45168/helpless';
mongoose.connect(dburl);

//Schema Post
var BlogpostSchema = new Schema({
    title : String,
    body : String,
    pubdate : { type: Date, default: Date.now },
    author : String,
});

var BlogpostModel = mongoose.model('Blogpost', BlogpostSchema);



//the basic variables
var title;
var post;
var date;
var webtitle;


/* GET post page. (WIP) */
router.get('/:psid?', function(req, res, next) {
       var postid = req.params.psid || 0; // if no psid is given in url, default to post 0

        var file_path = "../content/essays/" + postid + ".json";
        var content = require(file_path);

        // BlogpostModel.findOne({psid : postid}, 'title post date webtitle', function (err, blogPost) {
        //     if (err) return handleError(err);
        //     console.log('%s \n %s', blogPost.title, blogPost.post);
        // });

        res.render('index', { title: content.title, date: content.date, post: content.post, webtitle: content.webtitle});
    });


module.exports = router;