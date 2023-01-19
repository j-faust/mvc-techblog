const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// get information for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Post.findAll({
            attributes: [
                'id',
                'post_title',
                'post_content'
            ],
            include: [
             {
            model: Comment,
            attributes: ['id', 'user_comment', 'post_id', 'user_id'],
                include: {
                    model: User,
                        attributes: ['username'],
                }
            }, {
                model: User,
                attributes: ['username'],
            }
           ]     
        });
        const postData = dbBlogData.map(post => post.get({ plain: true }));
        
        res.render('homepage', {
            postData,
            username: req.session.username,
            loggedIn: req.session.loggedIn,
        })
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
