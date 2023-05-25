const { Router } = require('express')

const {ValidateUser,LoginUser,EroorUser,LogOut} = require ('../handlers/auth/loginHandler')
const bookRouterAuth = Router()

require('../handlers/auth/auth.js')
require('../handlers/auth/local.js')
const passport = require('passport')

function isLoggedIn (req, res, next) {
    console.log(req.isAuthenticated());
    req.isAuthenticated() ? next() : res.redirect('/books/auth/error')
     //res.sendStatus(401)
  }
  
  // serializacion
  // { id: 1, name: 'urial' }
  // 1 => Sereliazcion
  passport.serializeUser(function (user, done) {
    done(null, user)
  })
  
  // deseralizacion
  passport.deserializeUser(function (user, done) {
    done(null, user)
  })
  
  bookRouterAuth.get('/validate', isLoggedIn, ValidateUser)
  bookRouterAuth.get('/error',EroorUser)  

  bookRouterAuth.post('/login',  passport.authenticate('local', {
     successRedirect: '/books/auth/validate',
     failureRedirect: '/books/auth/error'
   }), LoginUser)

  
 // bookRouterAuth.get('/login',LoginUser)

 bookRouterAuth.get('/logout', LogOut)


 bookRouterAuth.get('/authSocial',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ))

    bookRouterAuth.get('/authSocial/google',
    passport.authenticate('google', {
      successRedirect: '/books/auth/validate',
     failureRedirect: '/books/auth/error'
    })
  )


module.exports = bookRouterAuth