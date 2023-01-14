const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    try {
        const userPostData = Post.findAll({
            attributes: [
                'id',
                'post_title',
                'post_content',
            ],
            include: [{
                model: Comment, 
                attributes: [
                    
                ]
            }]
        })
    } catch(err) {

    }
})