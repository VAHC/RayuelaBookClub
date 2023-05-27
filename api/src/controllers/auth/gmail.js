const passport = require('passport')
 require('dotenv').config()
// const { User } = require('../../db');

// const GoogleStrategy = require('passport-google-oauth2').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const findOrCreate= async (name,username,password,done)=>{

//   try {

//     if(name && username && password){
//       const [user, created] = await User.findOrCreate({ where: { email: username },
//         defaults: { password: password,
//                      profile: 'usuario',
//                      name: name,
//                      createdDb: false
//        }});
//        if (created) {
//         // El usuario se creó correctamente
//         return done(null, user);
//         } else {
//         // Las credenciales son válidas, autenticación exitosa
//           if(user.dataValues.createdDb)
//           {
//             // se creo usando el metodo local
//             return done(null, false);
//           }else
//           {
//             return done(null, user);
//           }
//         }
//     }else{
//       // no existe alguna variable lo saco
//       return done(null, false);
//     }
//   } catch (err) {
//     console.log(err);
//     return done(null, false);
//   }
// }
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/books/auth/authSocial/google',
      },
      (accessToken, refreshToken, profile, done) => {
        // Aquí puedes realizar acciones adicionales, como buscar o crear un usuario en tu base de datos
        // Luego, llama a `done` para pasar el perfil del usuario a Passport
        return done(null, profile);
      }
    )
  );

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3001/books/auth/authSocial/google',
//   passReqToCallback: true
// },
// async function  (request, accessToken, refreshToken, profile, done)  {
//   // aca busco en la base de datos o lo creo
//   // entra por aca la info
//   findOrCreate(profile.name.givenName,profile.email,'hsdhsye4y4aeae4se50s7s',done)
//  // return done(null, profile)
// }))
