const passport = require('passport')
const PassPortLocal = require('passport-local').Strategy

passport.use(new PassPortLocal(function (username, password, done) {
  // entra por aca la info
  console.log('local js');
  if (username === 'codigo' && password === '12345678') {
    return done(null, { id: 1, name: 'urial' })
  } else {
    done(null, false)
  }
}))
