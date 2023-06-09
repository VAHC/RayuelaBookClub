const { Router } = require('express');
const getAllUsersHandler = require('../handlers/users/getAllUsersHandler');
const getUserByIdHandler = require('../handlers/users/getUserByIdHandler');
const deleteUserHandler = require('../handlers/users/deleteUserHandler');
const updateUserHandler = require('../handlers/users/updateUserHandler');
const passwordResetReqHandler = require('../handlers/users/passwordResetReqHandler');
const passwordResetResHandler = require('../handlers/users/passwordResetResHandler');
const cancelSuscriptionHandler = require('../handlers/users/cancelSuscriptionHandler');
const buySuscriptionHandler = require('../handlers/users/buySuscriptionHandler');


const usersRouter = Router();

usersRouter.get('/', getAllUsersHandler)
usersRouter.get('/:id', getUserByIdHandler)
usersRouter.put('/delete/:id', deleteUserHandler)
usersRouter.put('/', updateUserHandler)
usersRouter.post('/suscription', buySuscriptionHandler)
usersRouter.put('/suscription/:id', cancelSuscriptionHandler)
usersRouter.post('/password', passwordResetReqHandler)
usersRouter.post('/password/:token', passwordResetResHandler)


module.exports = usersRouter