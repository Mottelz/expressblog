const express = require('express');
const podcast = require('podcast2');
const router = express.Router();

const feedData = {
    title: "Only the Knowing",
    description: "The debut novel of YouTube personality Vernaculis.",
    feed_url: "https://mottelz.herokuapp.com/podcast",
    site_url: "https://mottelz.herokuapp.com/",
    language: "en",
    author:"Vernaculis"
};
const episodes = [{
    title:"01 Chapter One",
    description:"Stuff starts happening.",
    url:"https://mottelz.herokuapp.com/podcast/01_Chapter_One.mp3",
    author:"Vernaculis",
    date:"Feb 5, 2018"
}];

const feed = podcast(feedData,episodes);

router.get('/podcast/:fileid', function(req, res, next) {
    var fileid = req.params.fileid;
    var file = '../public/podcast/' + fileid;
    var buffer = new Buffer(file);
    res.sendSeekable(buffer, { type: 'audio/mp3' });
});


/*Homepage Render*/
router.get('/', function(req, res, next) {
    // res.render('home', {webtitle: "Mottelz - Home"});
    var file_path = "../content/dev/1.json";
    var content = require(file_path);
    res.render('home', {
        type: 'dev',
        title: content.title,
        date: content.date,
        post: content.post,
        webtitle: content.webtitle,
        author: content.author
    });
});

/* GET Podcast Feed*/
router.get('/podcast',function(req,res,next) {
    res.send(feed);
});

/* GET post page.*/
router.get('/:posttype/:psid?', function(req, res, next) {
        var postid = req.params.psid;
        var posttype = req.params.posttype;
        var file_path = "../content/" + posttype + "/" + postid + ".json";
        var content = require(file_path);


        if (posttype == "essays" || posttype == "dev") {
        res.render('index', {
            type: posttype,
            title: content.title,
            date: content.date,
            post: content.post,
            webtitle: content.webtitle,
            author: content.author,
            prev: content.prev,
            next: content.next}); }

    });

module.exports = router;