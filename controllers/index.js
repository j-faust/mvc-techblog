const router = require('express').Router();
const apiRoutes = require('./api');
const userRtes = require('./api/user-routes'); 
const postRtes = require('./api/post-routes');
const commentRtes = require('./api/comment-routes');
const homeRtes = require('./home-routes');
const dbRoutes = require('./dashboard-routes');


router.use('/api/users', userRtes);
router.use('/api/posts', postRtes);
router.use('/api/comments', commentRtes);
router.use('/', homeRtes);
router.use('/dashboard', dbRoutes);
router.use('/api', apiRoutes);


module.exports = router;