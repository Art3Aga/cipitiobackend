

//PATH = api/login

const { Router } = require('express');
const { login, registro } = require('../controladores/autentificacion_controller');

const router = Router();

router.post('/auth', login);
router.post('/registro_usuario', registro);


module.exports = router;