const router = require('express').Router();
const apiRoutes = require('./api');
const userRtes = require('./api/user-routes'); 
const postRtes = require('./api/post-routes');
const commentRtes = require('./api/comment-routes');
const homeRtes = require('./home-routes');

router.use('/api/users', userRtes);
router.use('/api/posts', postRtes);
router.use('/api/comments', commentRtes);
router.use('/', homeRtes);



module.exports = router;