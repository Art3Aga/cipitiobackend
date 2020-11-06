const { Schema, model } = require('mongoose');

const PedidoSchema = Schema({

    id_pedido: {
        type: String,
        required: true,
        default: new Date().valueOf()
    },
    id_orden: {
        type: String,
        required: true
    },
    id_cliente: {
        type: String,
        required: true
    },
    id_menu_promo: {
        type: String   //menu_promo ya que el pedido del cliente puede contener menu o promocion
    },
    cantidad: {
        type: Number,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    }

});

module.exports = model('Pedido', PedidoSchema);