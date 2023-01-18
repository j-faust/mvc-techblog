const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', withAuth, async (req, res) => {
    try {
        const userDashboardData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: [
                'id',
                'title',
                'date_created',
                'post_content',
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'date_created', 'user_comment', 'user_id', 'post_id'],
                
            }],
            include: {
                model: User,
                attributes: ['username'],
            }
        },{
            model: User,
            attributes: ['username'],
        })
        res.status(200).json(userDashboardData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const editDbPost = await Post.findOne({
            where: {
                id: req.params.id
            }, 
            attributes: [
                'id',
                'title',
                'post_content',
                'date_created',
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'date_created', 'user_comment', 'user_id', 'post_id'],
                include: {
                    model: User,
                    attributes: ['username'],
                }
            },{
                model: User,
                attributes: ['username'],
            }]
        })
        if(!editDbPost) {
            res.status(404).json({message: 'No post found with this id!'});
            return;
        }
        const post = editDbPost.get({  plain: true });
        res.render('edit-post', { post, loggedIn: true });
    } catch(err) {
        console.log(err);
        res.status(500).json(err); 
    };
});

router.get('/create', withAuth, (req, res) => {
    try {
        const createDbPost = Post.create({
            where: {
                user_id: req.session.user_id,
            },
            attributes: [
                'id',
                'title',
                'post_content',
                'date_created',
            ],
            attributes: [
                'id',
                'title',
                'post_content',
                'date_created',
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'date_created', 'user_comment', 'user_id', 'post_id'],
                include: {
                    model: User,
                    attributes: ['username'],
                }
            },{
                model: User,
                attributes: ['username'],
            }]
        })
        if(!editDbPost) {
            res.status(404).json({message: 'No post found with this id!'});
            return;
        }
        const userPosts = editDbPost.map({  plain: true });
        res.render('create-post', { userPosts, loggedIn: true });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;