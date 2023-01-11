const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// get information for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Post.findAll({
            include: [User],
        });
        const blogPost = dbBlogData.map()
    }
})