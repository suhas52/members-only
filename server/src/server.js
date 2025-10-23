const path = require("node:path");
const express = require('express');
const passport = require('./auth/passport');
const { Pool } = require('pg');

const session = require("express-session");
const routes = require("./routes/api")
const app = express();
const cors = require('cors');
const PORT = 3000;


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET','POST','DELETE']
}));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use("/api", routes);


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started on port:", PORT)
    }
})