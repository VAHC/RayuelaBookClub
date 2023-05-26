

const ValidateUser = async (req, res) => {
 
  console.log(req.user);
    res.send(`Hello ${req.user.name} <a href="/books/auth/logout">logout</a>`)
  }

  const ErrorUserExist = async (req, res) => {
    // failureRedirect 
    res.send('usuario ya creado')
 }

 const ErrorLogin = async (req, res) => {
  // failureRedirect 
  res.send(' error en nombbre usuario o password')
}

 
const LogOut = async (req, res) => {
  
    if (req.user) {
          req.logout(function (err) {
            if (err) { res.send('eroro!') }
            req.session.destroy()
            res.send('Goodbye! server ')
          })
        } else {
          res.redirect('/login')
        }
}

module.exports = {
    ValidateUser,
    ErrorUserExist,
    ErrorLogin,
    LogOut
};