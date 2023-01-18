// requiring the User model
const { User } = require('../models');

// data for the User model
const uData = [
    {
        username: "smitty22",
        user_email: "smitty@gmail.com",
        user_pw: "pw@smitty1",
    },
    {
        username: "c_snap3",
        user_email: "csnap@gmail.com",
        user_pw: "pw@csnap2",
    },
    {
        username: "jsmith",
        user_email: "jsmith99@gmail.com",
        user_pw: "pw@jsmith9",
    },
    {
        username: "allen456",
        user_email: "allen456@gmail.com",
        user_pw: "pw@allen456",
    }
];

// function to seed the User model
const userSeed = () => User.bulkCreate(uData);

// exporting the function
module.exports = userSeed;