

const ValidateUser = async (req, res) => {
    /// si esta ok

    res.send(`Hello ${req.user.name} <a href="/books/auth/logout">logout</a>`)
  }

const LoginUser = async (req, res) => {
     // recibir credendiales y iniciar sesion
    console.log('userrr');
    }

  const EroorUser = async (req, res) => {
    // recibir credendiales y iniciar sesion
    res.send('error')
 }

 const LogOut = async (req, res) => {
  // recibir credendiales y iniciar sesion
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
    LoginUser,
    EroorUser,
    LogOut
};