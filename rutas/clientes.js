//PATH = api/clientes

const { Router } = require('express');
const { nuevoCliente, listaClientes, loginCliente, nuevaDireccion, direccionesByCliente, clienteByID } = require('../controladores/clientes_controller');


const router = Router();

router.get('/lista', listaClientes);
router.get('/direcciones/:id_cliente', direccionesByCliente);
router.get('/cliente/:id_cliente', clienteByID);
router.post('/nuevo_cliente', nuevoCliente);
router.post('/login_cliente', loginCliente);
router.post('/nueva_direccion', nuevaDireccion);


module.exports = router;