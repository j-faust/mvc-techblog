const router = require('express').Router();
const { User }= require('../../models/User');


// main log in user route 
router.post('/', async (req, res) => {
    try {
        const userDbData = await User.create ({
            username: req.body.username,
            user_email: req.body.user_email,
            user_pw: req.body.user_pw,
        });
        // set sessions with logged in value set to true
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userDbData);
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Log in user route
router.post('/login', async (req, res) => {
    try {
        const userDbData = await User.findOne({
            where: {
                email: req.body.user_email,
            },
        })
        if(!userDbData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password entered!' });
            return;
        }
        const validPw = await userDbData.checkPassword(req.body.user_pw);

        if(!validPw) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password entered!' })
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;

            res
              .status(200)
              .json({ user: userDbData, message: 'You are now logged in!' });
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to log user out of account
router.post('/logout', (req, res) => {
    // This will destroy the session if the user logs out
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;