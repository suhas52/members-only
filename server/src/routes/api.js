const express = require("express");
const router = express.Router();
const db = require('../db/queries');
const bcrypt = require("bcryptjs");


router.post("/sign-up", async (req, res, next) => {
    try {
        const { username, password, first_name, last_name} = req.body;
        const hashed_password = bcrypt.hash(password, 10);
        db.addUser(username, hashed_password, first_name, last_name)
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;