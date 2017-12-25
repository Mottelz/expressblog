var express = require('express');
var router = express.Router();

/*Homepage Render*/
router.get('/', function(req, res, next) {
    // res.render('home', {webtitle: "Mottelz - Home"});
    var file_path = "../content/dev/0.json";
    var content = require(file_path);
    res.render('index', {
        type: 'dev',
        title: content.title,
        date: content.date,
        post: content.post,
        webtitle: content.webtitle,
        author: content.author,
        prev: content.prev,
        next: content.next});
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