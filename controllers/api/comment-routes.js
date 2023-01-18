const router = require('express').Router();
const { Comments } = require('../../models');
const User = require('../../models/User');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({ include: [User, Post] });
        res.status(200).json(commentData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
    const commentIdData = await Comment.findByPk(
        req.params.id,
        { include: [User, Post] });
        res.status(200).json(commentIdData);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
    try { 
        const newComment = await Comment.create({
            body: req.params.body,
            userId: req.params.user.id,
            postId: req.params.post.id,
        });
        res.json(newComment);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updComment = await Comment.update({
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json(updComment);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id,
            }
        })
    res.status(200).json(deleteComment)
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;