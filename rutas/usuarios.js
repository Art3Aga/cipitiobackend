//PATH = api/usuarios

const { Router } = require('express');
const { listaRepartidores, nuevoRepartidor, listaUsuarios, usuarioByID } = require('../controladores/usuarios_controller');

const router = Router();

router.get('/repartidores', listaRepartidores);
router.get('/usuario/:id_usuario', usuarioByID);
router.get('/lista', listaUsuarios);
router.post('/nuevo_repartidor', nuevoRepartidor);


module.exports = router;