// requiring the Comment model
const { Comment } = require('../models');

// data to seed the comment db
const cData = [
    {
        user_id: 2,
        post_id: 3,
        user_comment: 'Awesome!',
    },
    {
        user_id: 3,
        post_id: 1,
        user_comment: 'This was great! I really liked it!',
    },
    {
        user_id: 1,
        post_id: 2,
        user_comment: 'Way to go!',
    },
    {
        user_id: 4,
        post_id: 4,
        user_comment: 'That is really cool!',
    }
]

// function to seed the comment table in the db 
const commentSeed = () => Comment.bulkCreate(cData);

// exporting the function
module.exports = commentSeed;