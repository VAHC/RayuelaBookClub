const { Router } = require('express');
const bookRouter = require('./bookRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/books', bookRouter);

module.exports = router;
