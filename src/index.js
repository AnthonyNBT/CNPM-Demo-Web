const express = require('express');
const { engine } = require('express-handlebars');

const db = require('./config/db');

db.connect();

const app = express();
const port = 10101;

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Started at http://localhost:${port}`);
});