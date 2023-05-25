const { Router } = require('express')
const bookRouter = require('./bookRouter')
const genderRouter = require('./genderRouter')
const authorRouter = require('./authorRouter')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/books', bookRouter)
router.use('/genres', genderRouter)
router.use('/authors', authorRouter)

module.exports = router
