const passport = require('passport')
const PassPortLocal = require('passport-local').Strategy
const { User } = require('../../db');


const CreateUser= async (req,username,password,done)=>{

      try {
        const {name,lastName,phone} = req.body
        if(name && lastName && username && password && phone ){
          const [user, created] = await User.findOrCreate({ where: { email: username },
            defaults: { password: password,
                         profile: 'usuario',
                         firstName: name,
                         lastName: lastName,
                         phone: phone,

           }});
              if (created) {
              // El usuario se creó correctamente
              return done(null, user);
              } else {
              // Las credenciales son válidas, autenticación exitosa
              return done(null, false);
              }
        }else{
          // no existe alguna variable lo saco
          return done(null, false);
        }
      } catch (err) {
        console.log(err);
        return done(null, false);
      }
}

const FindUser =async (username,password,done) =>{
  const usuario = await User.findOne({ where: { email: username } });
  if(usuario)
  {
    console.log(usuario.dataValues.password);
    if(password === usuario.dataValues.password)
    {
      return done(null, usuario);
    }else
    {
      return done(null, false);
    }
  }else{
    return done(null, false);
  }  
}

passport.use(new PassPortLocal({ passReqToCallback: true,  usernameField: 'email' }, async function (req, email, password, done) {
      // entra por aca la info
      console.log('local js');
      const {name} = req.body
        if (name){
          CreateUser(req,email,password,done)
        }else
        {
          FindUser(email,password,done)
        }
}))
