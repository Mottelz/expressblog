var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//Using mongoose to accept mongoDB
var dburl = 'mongodb://mottel:H3r3inbepoints@ds145168.mlab.com:45168/helpless';
mongoose.connect(dburl);
var db = mongoose.connection;
var Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //Schema Post
    var postSchema = new Schema({
        title : String,
        body : String,
        pubdate : { type: Date, default: Date.now },
        author : String,
        //tags : [{body: String}],
    });


    //Convert to model
    var blogPost = mongoose.model('blogPost', postSchema);

    essayX = blogPost.find().findOne({ title: 'Essay 0/52: What’s the Point?' });
    console.log(essayX);
});



//the basic variables
var title = "Essay 0/52: What’s the Point?";
var post = "<p class='date'>This site is currently under construction, but I didn't want to use that as an excuse to not start this project.</p><p>Over the coming year I intend to write an essay every week. There will be no constraint on the topics or content, only on the release schedule. I have no clue what most of them will be about. I do have a few topic ideas, but we’ll see if any of those pan out. While I work on the first essay, here’s a bit of background on what inspired me to take on this project.</p> <p><a target='_blank' href='https://www.instagram.com/samurai_origami/'>SAM-urai</a> is a paper artist that took on her own 365 project, for the past year she has been doing a piece of origami (a word autocorrect always me on) artwork every single day. My personal favourite is probably <a target='_blank' href='https://www.instagram.com/p/BMqH2EPhrnL/'>the poppy</a>, but a few of them have hit me like the end of a Wes Anderson film I can feel a welling of emotion that I cannot explain (possibly a topic for the future). Sam is also a friend and watching her complete this project has inspired me to take on some sort of year long project. The trouble was picking one that would be a challenge, but that I’d still follow through on. I also wanted a project I will benefit from, this ruled out the donut-a-day project (yes, that joke was dirtier initially). </p> <p>I want to be a writer. Despite currently majoring in Computer Science all of my paid work this year has been at least peripherally linked to writing. I’ve graded English papers and written a comic and puzzles for a community paper. I’m also aware that the money I earn at present is unlikely to support anyone, myself included, which is why I’m majoring in a more lucrative field. For now though, I have time to spend perfecting my writing ability while I study and so I chose a project that would help perfect that set of skills. </p> <p>Although any writing project would definitely help improve my ability. To paraphrase <a target='_blank' href='https://vimeo.com/24715531'>Ira Glass</a>, ‘the only way to stop sucking is to keep going’. There are two areas of writing where I'm weakest. The first is my prose, I need to just get better at the mechanics of writing that I’ve been able to ignore while writing poetry. The second is that I need to finish my first novel. I realize that writing 52 essays (this one is not included) won’t help with the second, but I think that I need to work on my ability to develop, analyze and critique ideas. Therefore, I chose a project that is going to force me to do develop my prose. </p><p>(I’m going to do my best to finish writing the novel this year as well. I’ve just had too many failed attempts at using projects to force creative works to waste another. As I write it I may post it here, once this site actually looks like a website.)</p><p>I’m a little afraid of doing this, because I don’t know how I’ll be viewed by the end of it. (Here, I find solace in the unlikeliness of people actually reading long written works posted on an obscure blog.) That’s because of where I currently am in life and what I hope to accomplish with this project. I am a confused 25 year old Orthodox Jewish guy who is more likely to repeat someone else’s ideas than to state my own. Lately, I’ve accepted that it is fundamentally important to have a core value system. One that grows in daylight. One that can stand up to scrutiny and challenge. Over the past year I think I’ve begun to work out those ideas for myself, but now they need to be developed and tested. More than anything else, that is my goal with this project. To spend a year developing ideas by accepting and thinking through the critique I receive. </p><p>The best way to accomplish this is to do my best to avoid breaking news. Otherwise I have a good chance of falling into the trap of fighting over the specific spin people are trying to apply to an event instead of an underlying issue I want to develop my own ideas about. This rule does not apply to works of fiction. Meaning I’m almost certainly going to look at pop culture, but then too I’m going to try and focus on a bigger idea. </p><p>Since this entire project is being done for fun and personal development, I will leave it with one final rule: There is no word count. As long as whatever I write has a beginning, middle and end. As long as it looks at something or presents an idea in an arguably coherent form. As long as I write at least one thing like that every week for the next 52 weeks I will have completed this project and hopefully learned something along the way. </p>";
var date = "January 1st, 2017";
var webtitle = "MottelZ - Essay 0/52";

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: title, date: date, post: post, webtitle: webtitle});
 });


/* GET home page. */
/*  router.get('/:postid', function(req, res, next) {
    get({postid: req.param.postid})
    res.render('index', { title: title, date: date, post: post, webtitle: webtitle});
});*/

module.exports = router;


//create post
/*var essay0 = new blogPost;
 essay0.title = "Essay 0/52: What’s the Point?";
 essay0.body = "<p class='date'>This site is currently under construction, but I didn't want to use that as an excuse to not start this project.</p><p>Over the coming year I intend to write an essay every week. There will be no constraint on the topics or content, only on the release schedule. I have no clue what most of them will be about. I do have a few topic ideas, but we’ll see if any of those pan out. While I work on the first essay, here’s a bit of background on what inspired me to take on this project.</p> <p><a target='_blank' href='https://www.instagram.com/samurai_origami/'>SAM-urai</a> is a paper artist that took on her own 365 project, for the past year she has been doing a piece of origami (a word autocorrect always me on) artwork every single day. My personal favourite is probably <a target='_blank' href='https://www.instagram.com/p/BMqH2EPhrnL/'>the poppy</a>, but a few of them have hit me like the end of a Wes Anderson film I can feel a welling of emotion that I cannot explain (possibly a topic for the future). Sam is also a friend and watching her complete this project has inspired me to take on some sort of year long project. The trouble was picking one that would be a challenge, but that I’d still follow through on. I also wanted a project I will benefit from, this ruled out the donut-a-day project (yes, that joke was dirtier initially). </p> <p>I want to be a writer. Despite currently majoring in Computer Science all of my paid work this year has been at least peripherally linked to writing. I’ve graded English papers and written a comic and puzzles for a community paper. I’m also aware that the money I earn at present is unlikely to support anyone, myself included, which is why I’m majoring in a more lucrative field. For now though, I have time to spend perfecting my writing ability while I study and so I chose a project that would help perfect that set of skills. </p> <p>Although any writing project would definitely help improve my ability. To paraphrase <a target='_blank' href='https://vimeo.com/24715531'>Ira Glass</a>, ‘the only way to stop sucking is to keep going’. There are two areas of writing where I'm weakest. The first is my prose, I need to just get better at the mechanics of writing that I’ve been able to ignore while writing poetry. The second is that I need to finish my first novel. I realize that writing 52 essays (this one is not included) won’t help with the second, but I think that I need to work on my ability to develop, analyze and critique ideas. Therefore, I chose a project that is going to force me to do develop my prose. </p><p>(I’m going to do my best to finish writing the novel this year as well. I’ve just had too many failed attempts at using projects to force creative works to waste another. As I write it I may post it here, once this site actually looks like a website.)</p><p>I’m a little afraid of doing this, because I don’t know how I’ll be viewed by the end of it. (Here, I find solace in the unlikeliness of people actually reading long written works posted on an obscure blog.) That’s because of where I currently am in life and what I hope to accomplish with this project. I am a confused 25 year old Orthodox Jewish guy who is more likely to repeat someone else’s ideas than to state my own. Lately, I’ve accepted that it is fundamentally important to have a core value system. One that grows in daylight. One that can stand up to scrutiny and challenge. Over the past year I think I’ve begun to work out those ideas for myself, but now they need to be developed and tested. More than anything else, that is my goal with this project. To spend a year developing ideas by accepting and thinking through the critique I receive. </p><p>The best way to accomplish this is to do my best to avoid breaking news. Otherwise I have a good chance of falling into the trap of fighting over the specific spin people are trying to apply to an event instead of an underlying issue I want to develop my own ideas about. This rule does not apply to works of fiction. Meaning I’m almost certainly going to look at pop culture, but then too I’m going to try and focus on a bigger idea. </p><p>Since this entire project is being done for fun and personal development, I will leave it with one final rule: There is no word count. As long as whatever I write has a beginning, middle and end. As long as it looks at something or presents an idea in an arguably coherent form. As long as I write at least one thing like that every week for the next 52 weeks I will have completed this project and hopefully learned something along the way. </p>";
 essay0.author = "Mottel Zirkind";
 essay0.pubdate = Date.UTC(2016, 01, 01);
 //essay0.tags = ["essay", "art", "goal"];
 essay0.save();*/