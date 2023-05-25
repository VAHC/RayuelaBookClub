const passport = require('passport')
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google',
  passReqToCallback: true
},
function (request, accessToken, refreshToken, profile, done) {
  // aca busco en la base de datos o lo creo
  /*
  const [user, created] = await User.findOrCreate({
  where: { username: 'sdepold' },
  defaults: {
    job: 'Technical Lead JavaScript'
  }
});
  */
  console.log('//////// pas use')
  // console.log(profile);
  return done(null, profile)
}))
