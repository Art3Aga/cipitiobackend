//PATH = api/clientes

const { Router } = require('express');
const { nuevoCliente, listaClientes, loginCliente } = require('../controladores/clientes_controller');


const router = Router();

router.get('/lista', listaClientes);
router.post('/nuevo_cliente', nuevoCliente);
router.post('/login_cliente', loginCliente);


module.exports = router;