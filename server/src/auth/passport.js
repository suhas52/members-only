const LocalStrategy = require("passport-local").Strategy;
const { getUserByUsername, getUserById } = require('../db/queries');
const passport = require("passport");

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await getUserByUsername(username);
    if (!user) return done(null, false, { message: "Incorrect username" });
    if (user.password !== password) { 
      return done(null, false, { message: "Incorrect password" });
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
    console.log(user)
    
    done(null, user);
  } catch(err) {
    done(err);
  }
});

module.exports = passport;