const { Router } = require('express')
const {
    Signup
  } = require('../handlers/mailing/mailing')


const MailingRouter = Router();

MailingRouter.get('/', Signup)


module.exports = MailingRouter;