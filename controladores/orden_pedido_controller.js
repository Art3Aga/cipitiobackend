const { request, response } = require('express');
const Orden = require('../modelos/orden_model');
const Pedido = require('../modelos/pedido_model');


const listaOrdenes = async (req = request, res = response) => {

    try {
        
        let ordenes = await Orden.find({});

        res.json({
            ok: true,
            ordenes
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const listaPedidos = async (req = request, res = response) => {

    try {
        
        let pedidos = await Pedido.find({});

        res.json({
            ok: true,
            pedidos
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const listaPedidosByCliente = async (req = request, res = response) => {

    try {

        const { id_cliente } = req.params;
        
        let pedidos = await Pedido.find({ id_cliente });

        res.json({
            ok: true,
            pedidos
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const nuevaOrden = async (req = request, res = response) => {

    try {

        const { id_cliente } = req.body;

        if(id_cliente) {

            let orden = new Orden(req.body);

            let newOrden = await orden.save();

            if(newOrden) {

                res.json({
                    ok: true,
                    orden: newOrden
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar Orden!'
                });
            }
            return;

        }

        res.json({
            ok: false,
            data: 'Faltan Datos'
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: error
        });
    }

}

const nuevoPedido = async (req = request, res = response) => {

    try {

        const { id_cliente, id_orden, id_menu_promo, cantidad, subtotal } = req.body;

        if(id_cliente && id_orden && id_menu_promo && cantidad && subtotal) {

            let pedido = new Pedido(req.body);

            let newPedido = await pedido.save();

            if(newPedido) {

                let subtotalTemp = Number(subtotal);

                let orden = await Orden.findOne({ id_orden }); // SELECT * FROM Ordenes WHERE id_orden
                let total = Number(orden['total']);

                //console.log("TOTAL AL PRINCIPIO " + total);
                //console.log("SUBTOTAL " + subtotalTemp);

                total = total + subtotalTemp; // Calcular el total de la Orden en base al subtotal de cada pedido
                //console.log("TOTAL DESPUES " + total);
                await Orden.updateOne({ id_orden }, { total}); // UPDATE Ordenes SET total = ? WHERE id_orden

                res.json({
                    ok: true,
                    pedido: newPedido
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar Pedido!'
                });
            }
            return;

        }

        res.json({
            ok: false,
            data: 'Faltan Datos'
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: error
        });
    }

}


module.exports = {
    listaOrdenes,
    listaPedidos,
    listaPedidosByCliente,
    nuevoPedido,
    nuevaOrden
}