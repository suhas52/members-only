const path = require("node:path");
const express = require('express');
const passport = require('passport');
const { Pool } = require('pg');
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");
const routes = require("./routes/api")
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started on port:", PORT)
    }
})