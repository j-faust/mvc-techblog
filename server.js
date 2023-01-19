const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const helpers = require('./utils/helpers')
const hbs = exphbs.create({ helpers });

const { User, Post, Comment } = require('./models');
const { mainModule } = require('process');

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/home-routes'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('*** App Now Listening ***'));
});