// requiring the Post model
const { Post } = require('../models');

// data to seed for blod posts
const pData = [
    {
        post_title: 'Updated Employee Vacation Tool Goes Live!',
        post_content: 'The updated Employee Vacation Tool went live! This new and improved tool will help employees with scheduling vacation and in some instances even auto approved the requested time off.',
        user_id: 3,
    },
    {
        post_title: 'StrmrFy Hits 2 Million Creators',
        post_content: 'The streaming app StrmrFy has hit 2 million content creators.  The online app allows users to showcase their talents with things like video games, music, singing, art etc.  The creators can have viewers participate live during the stream and even subscribe for a monthly fee.  Check the app out today!',
        user_id: 1,
    },
    {
        post_title: 'Weather Dashboard is Running!',
        post_content: 'The Weather Dashboard App is up and running!  It will allow users to search for weather in their city.  They can get current weather as well as a 5 day forecast.  If needed they can also choose from their recently viewed cities!',
        user_id: 2
    },
    {
        post_title: 'TechyNews',
        post_content: 'The new tech centered news website is up.  TechyNews allows users to upvote stories, comment and create accounts to be follow stories and writers.',
        user_id: 4,
    }
];

// function to create and seed the db with the post data
const postSeed = () => Post.bulkCreate(pData);

// exporting the function
module.exports = postSeed;