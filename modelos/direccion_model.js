const { Schema, model } = require('mongoose');

const DireccionSchema = Schema({

    id_cliente: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    referencia: {
        type: String,
        required: true
    },
    coordenadas: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        required: true,
        default: false
    }

});

module.exports = model('Direccion', DireccionSchema);