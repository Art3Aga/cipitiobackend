const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({

    id_cliente: {
        unique: true,
        type: String,
        default: new Date().valueOf()
    },
    nombre: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

});

module.exports = model('Cliente', ClienteSchema);