const { Schema, model } = require('mongoose');

const PromoSchema = Schema({

    id_promo: {
        unique: true,
        type: String,
        default: new Date().valueOf()
    },
    menus: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    tipo: {
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
    descuento: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }

});

module.exports = model('Promo', PromoSchema);