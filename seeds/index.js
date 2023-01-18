const sequelize = require('../config/connection');
const postSeed = require('./post-seeds');
const commentSeed = require('./comment-seeds');
const  userSeed = require('./user-seeds');


const seedAll = async () => {
    await sequelize.sync({  force: true });
        console.log('\n***** DB Synced *****\n');

    await userSeed();
        console.log('\n***** User Seeded *****\n');

    await postSeed();
        console.log('\n***** Posts Seeded *****\n');

    await commentSeed();
        console.log('\n***** Comments Seeded *****\n');

    process.exit(0);
};

seedAll();