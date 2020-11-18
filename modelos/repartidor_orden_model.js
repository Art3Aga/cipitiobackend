const { Schema, model } = require('mongoose');

const RepartidorOrdenSchema = Schema({

    id_repartidor_orden: {
        type: String,
        default: new Date().valueOf()
    },
    id_orden: {
        type: String,
        required: true
    },
    id_repartidor: {
        type: String,
        required: true
    }

});

module.exports = model('RepartidorOrden', RepartidorOrdenSchema);