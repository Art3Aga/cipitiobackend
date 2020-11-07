const { Schema, model } = require('mongoose');

const MenuSchema = Schema({

    id_menu: {
        unique: true,
        type: String,
        default: new Date().valueOf()
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }

});

module.exports = model('Menu', MenuSchema);