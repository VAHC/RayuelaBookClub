const { Router } = require('express')
const bookRouter = require('./bookRouter')
const bookRouterAuth = require('./bookRouterAuth')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/books', bookRouter)
router.use('/books/auth', bookRouterAuth)

module.exports = router
