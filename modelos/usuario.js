

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    id_usuario: {
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
    rol: {
        type: String,
        required: true
    }

});

module.exports = model('Usuario', UsuarioSchema);

/*function Usuarios({id_usuario,nombre,clave,telefono,rol,color}) {

    this.id_usuario = id_usuario;
    this.nombre = nombre;
    this.clave = clave;
    this.telefono = telefono;
    this.rol = rol;
    this.color = color;
}

module.exports = Usuarios;*/

