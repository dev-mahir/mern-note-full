const passport = require("passport");
const User = require("../models/User");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5050/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      const user =await User.findOne({ googleId: profile.id });
        if (!user) {
          const newUser =await User.create({
            googleId: profile.id,
            name: profile.displayName,
          });
          return cb(null, newUser);
        } else {
          // if we find user just return user
          return cb(null, user);
        }

    }
  )
);

// create session id
// whenever we login it creates user id inside session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});
