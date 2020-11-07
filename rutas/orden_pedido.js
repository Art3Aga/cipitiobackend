//PATH = api/orden_pedido

const { Router } = require('express');
const { nuevaOrden, nuevoPedido, listaOrdenes, listaPedidos, listaPedidosByCliente } = require('../controladores/orden_pedido_controller');

const router = Router();

router.get('/ordenes', listaOrdenes);
router.get('/pedidos', listaPedidos);
router.get('/pedidos_cliente', listaPedidosByCliente);
router.post('/nuevo_pedido', nuevoPedido);
router.post('/nueva_orden', nuevaOrden);


module.exports = router;