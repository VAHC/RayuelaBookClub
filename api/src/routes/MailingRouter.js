const { Router } = require('express')
const {
  TestingMail,RealMail
  } = require('../handlers/mailing/mailing')


const MailingRouter = Router();

MailingRouter.get('/', TestingMail)
MailingRouter.get('/google', RealMail)



module.exports = MailingRouter;