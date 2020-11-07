const { Schema, model } = require('mongoose');

const OrdenSchema = Schema({

    id_orden: {
        type: String,
        default: new Date().valueOf()
    },
    id_cliente: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        default: 'En Proceso'
    },
    total: {
        type: Number,
        required: true
    },
    fecha: {
        type: String,
        default: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
    }

});

module.exports = model('Orden', OrdenSchema);