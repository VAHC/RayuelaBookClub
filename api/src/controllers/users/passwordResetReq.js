const { User } = require('../../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MailgmailPassword } = require('../../handlers/mailing/mailing')


const passwordResetReq = async (email) => {

    const userToReset = await User.findOne({ where: { email } })
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!userToReset) {
        throw Error(`No user has been found matching the email: ${email}`)
    
    } if(userToReset.createdDb === true) {

        const token = jwt.sign({ userId: userToReset.id}, secretKey)
        console.log(token)

        await MailgmailPassword("Rayuela", `http://127.0.0.1:5173/ingresar?token=${token}`,`${userToReset.firstName}`, 'Intro', email, 'subject')
    }
    else {
        throw Error(`this account has been created through Gmail`)
    }
}


    module.exports = passwordResetReq;