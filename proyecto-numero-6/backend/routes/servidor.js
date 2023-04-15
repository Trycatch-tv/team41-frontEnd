const express = require('express');
const router = express.Router();

//inicializando la raiz del servidor
router.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación!');
  });

  module.exports = router