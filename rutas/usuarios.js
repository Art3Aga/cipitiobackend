//PATH = api/usuarios

const { Router } = require('express');
const { listaRepartidores, nuevoRepartidor } = require('../controladores/usuarios_controller');

const router = Router();

router.get('/repartidores', listaRepartidores);
router.post('/nuevo_repartidor', nuevoRepartidor);


module.exports = router;