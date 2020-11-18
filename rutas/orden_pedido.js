//PATH = api/orden_pedido

const { Router } = require('express');
const { nuevaOrden, nuevoPedido, listaOrdenes, listaPedidos, listaPedidosByCliente, 
    listaPedidosByOrden, pedidoByID, nuevoRepartidorOrden, GetRepartidorOrdenByOrden,
    ordenByID, updateOrden
} = require('../controladores/orden_pedido_controller');

const router = Router();

router.get('/ordenes', listaOrdenes);
router.get('/pedidos', listaPedidos);
router.get('/orden/:id_orden', ordenByID);
router.get('/updateOrden/:id_orden', updateOrden);
router.get('/repatidor_orden_byOrden/:id_orden', GetRepartidorOrdenByOrden);
router.get('/pedidos_cliente', listaPedidosByCliente);
router.get('/pedidosbyorden/:id_orden', listaPedidosByOrden);
router.get('/pedido/:id_pedido', pedidoByID);
router.post('/nuevo_pedido', nuevoPedido);
router.post('/nueva_orden', nuevaOrden);
router.post('/nueva_orden_repartidor', nuevoRepartidorOrden);


module.exports = router;