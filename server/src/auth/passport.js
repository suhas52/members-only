const LocalStrategy = require("passport-local").Strategy;
const { getUserByUsername, getUserById } = require('../db/queries');
const passport = require("passport");
const bcrypt = require('bcryptjs')

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await getUserByUsername(username);
    const match = await bcrypt.compare(password, user.password);
    if (!user) return done(null, false, { message: "Incorrect username" });
    if (!match) {
      return done(null, false, { message: "Incorrect password" })
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUserById(id);
    done(null, user);
  } catch(err) {
    done(err);
  }
});

module.exports = passport;