const express = require("express");
const router = express.Router();
const db = require('../db/queries');
const bcrypt = require("bcryptjs");
const passport = require("../auth/passport");


router.post("/sign-up", async (req, res, next) => {

    try {
        const { username, password, first_name, last_name} = req.body;
        const hashed_password = await bcrypt.hash(password, 10);
        db.addUser(username, hashed_password, first_name, last_name)
    } catch (err) {
        console.log(err);
    }
});

router.get("/test", async (req, res, next) => {
    try {
        console.log(req)
    } catch (err) {
        console.log(err)
    }
})

router.post("/log-in", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: info.message });

        req.logIn(user, (err) => {
            if (err) return next(err);
            res.json({ message: "Logged in successfully", user });
        });
    })(req, res, next);
});

router.get("/me", (req, res, next) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        console.log("test")
        res.status(401).json({ user: null })
    }
})

module.exports = router;