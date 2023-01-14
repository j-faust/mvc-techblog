const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// get information for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Post.findAll({
            attributes: [
                'id',
                'post_title',
                'post_content'
            ],
            include: [User],
        });
        const blogPost = dbBlogData.map((post) => 
            post.get({ plain: true })
        )
        .then(res.render('homepage', {
           blogPost,
            loggedIn: req.session.loggedIn,
        }));
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        res.render('signup');
    }
});



module.exports = router;
