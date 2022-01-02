const express = require("express");
const { engine } = require("express-handlebars");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const db = require("./config/db");
const route = require("./routes/index");

db.connect();

const app = express();
const port = 10101;

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "abc",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 30 },
  })
);
app.use(flash());
app.use(methodOverride('_method'));


// Route Init
route(app);

app.listen(port, () => {
  console.log(`Started at http://localhost:${port}`);
});
