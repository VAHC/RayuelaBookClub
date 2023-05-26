const { Router } = require('express')

const {ValidateUser,ErrorUserExist,LogOut,ErrorLogin} = require ('../handlers/auth/loginHandler')
const bookRouterAuth = Router()

require('../controllers/auth/gmail.js')
require('../controllers/auth/local.js')
const passport = require('passport')

function isLoggedIn (req, res, next) {
    req.isAuthenticated() ? next() : res.redirect('/books/auth/error')
     //res.sendStatus(401)
  }
  
  // serializacion
  // { id: 1, name: 'urial' }
  // 1 => Sereliazcion
  passport.serializeUser(function (user, done) {
    console.log('serializeUser');
    let dato=''

    console.log(user);
      
    if (user.provider) {
      dato={
        name:user.name.givenName,
        pepe:'dsds'
      }
    } else {
      dato={
        name:user.name,
        pepe:'dsds'
      } 
    }
    done(null, dato)
  })
  
  // deseralizacion
  passport.deserializeUser(function (user, done) {
    console.log('deserializeUser');
    done(null, user)
  })
  
  bookRouterAuth.get('/validate', isLoggedIn, ValidateUser)

  bookRouterAuth.get('/ErrorUserExist',ErrorUserExist)

  bookRouterAuth.get('/ErrorLogin',ErrorLogin)

  bookRouterAuth.post('/login',  passport.authenticate('local', {
     successRedirect: '/books/auth/validate',
     failureRedirect: '/books/auth/ErrorLogin'
   }))

   bookRouterAuth.post('/registro',  passport.authenticate('local', {
    successRedirect: '/books/auth/validate',
    failureRedirect: '/books/auth/ErrorUserExist' 
  }))



 bookRouterAuth.get('/authSocial',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ))

  bookRouterAuth.get('/authSocial/google',
    passport.authenticate('google', {
      successRedirect: '/books/auth/validate',
     failureRedirect: '/books/auth/error'
    })
  )

  bookRouterAuth.get('/logout', LogOut)

module.exports = bookRouterAuth