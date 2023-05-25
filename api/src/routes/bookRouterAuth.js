const { Router } = require('express')

const {ValidateUser,LoginUser,EroorUser,LogOut} = require ('../handlers/auth/loginHandler')
const bookRouterAuth = Router()

//require('./auth')
require('../handlers/auth/local')
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
 //bookRouterAuth.get('/validate', ValidateUser)
 bookRouterAuth.get('/error',EroorUser)  

  bookRouterAuth.post('/login',  passport.authenticate('local', {
     successRedirect: '/books/auth/validate',
     failureRedirect: '/books/auth/error'
   }), LoginUser)

  
 // bookRouterAuth.get('/login',LoginUser)

 bookRouterAuth.get('/logout', LogOut)


//   app.get('/auth',
//     passport.authenticate('google', { scope: ['email', 'profile'] }
//     ))

//   app.get('/auth/google',
//     passport.authenticate('google', {
//       successRedirect: '/',
//       failureRedirect: '/login'
//     })
//   )
  
//   app.get('/logout', (req, res) => {
//     if (req.user) {
//       req.logout(function (err) {
//         if (err) { res.send('eroro!') }
//         req.session.destroy()
//         res.send('Goodbye! server ')
//       })
//     } else {
//       res.redirect('/login')
//     }
//   })

module.exports = bookRouterAuth