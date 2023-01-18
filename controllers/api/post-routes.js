const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
    try {
        const userPostData = await Post.findAll({
            attributes: [
                'id',
                'post_title',
                'post_content',
                'date_created'
            ],
            order: [['date_created', DESC]],
            include: [{
                model: Comment, 
                attributes: [
                    'id',
                    'post_id',
                    'user_comment',
                    'date_created',
                    'user_id',
                ],
                include: {
                    model: User, 
                    attributes: ['username'],
                },
                model: User,
                attributes: ['username'],
            } 
          ]
        })
        if(!userPostData) {
            res.status(404).json({ message: 'No post found!' });
            return;
        }
        res.status(200).json(userPostData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userPostData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: [
                'id', 
                'title',
                'post_content',
                'date_created',
            ],
            include: [{
                model: User,
                attributes: ['username'],
            }],
            include: [{
                model: User,
                attributes: ['username'],
            }],
        })
        if(!userPostData) {
            res.status(404).json({ message: 'No post found!' });
            return;
        }
        res.status(200).json(userPostData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const userPostData = await Post.create({
            title: req.body.title,
            post_content: req.body.post_content,
            user_id: req.session.user_id, 
        })
        res.status(200).json(userPostData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const userPostData = await Post.update({
            title: req.body.title,
            post_content: req.body.post_content,
        },{
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json(userPostData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const userPostData = await Post.destroy({
            where: {
                id: req.params.id,
            }
        })
        if(!userPostData) {
            res.status(404).json({ message: 'No post found!' });
            return;
        }
        res.status(200).json(userPostData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;