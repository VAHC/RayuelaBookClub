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
  
  // bookRouterAuth.get('/validate', isLoggedIn, ValidateUser)

  // bookRouterAuth.get('/ErrorUserExist',ErrorUserExist)

  // bookRouterAuth.get('/ErrorLogin',ErrorLogin)

  // bookRouterAuth.post('/login',  passport.authenticate('local', {
  //    successRedirect: '/books/auth/validate',
  //    failureRedirect: '/books/auth/ErrorLogin'
  //  }))

// Authentication routes
bookRouterAuth.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Error en el servidor ERR' })
    }
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas 401' })
    }
    console.log('-****--');
    console.log(user);
    console.log('--***-');
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error en el servidor ERR LOGin' })
      }
      return res.json({ message: 'Inicio de sesión exitoso' })
    })
  })(req, res, next)
})


bookRouterAuth.post('/registro', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Error en el servidor ERR' })
    }
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas 401' })
    }
    console.log('-****--');
    console.log(user);
    console.log('--***-');
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error en el servidor ERR LOGin' })
      }
      return res.json({ message: 'Inicio de sesión exitoso' })
    })
  })(req, res, next)
})

  //  bookRouterAuth.post('/registro',  passport.authenticate('local', {
  //  // successRedirect: '/books/auth/validate',
  //  // failureRedirect: '/books/auth/ErrorUserExist' 
  // }))



 bookRouterAuth.get('/authSocial',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ))
// Ruta para recibir el callback de Google después de la autenticación
bookRouterAuth.get('/authSocial/google', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // El usuario se ha autenticado correctamente, puedes redirigir o responder con una respuesta JSON de éxito
 console.log('gggggggggggggg');
  console.log(req.user);
 console.log('gggggggggggggg');
  res.json({ success: true });
});

//   bookRouterAuth.get('/authSocial/google',
//     passport.authenticate('google', {
//       successRedirect: '/books/auth/validate',
//      failureRedirect: '/books/auth/ErrorUserExist'
//     })
//   )

  bookRouterAuth.get('/logout', LogOut)

module.exports = bookRouterAuth