

const ValidateUser = async (req, res) => {
 
  console.log(req.user);
    res.send(`Hello ${req.user.name} <a href="/books/auth/logout">logout</a>`)
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
    LogOut
};