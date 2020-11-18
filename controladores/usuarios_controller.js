const { request, response } = require('express');
//const { connection } = require('../base_datos/config');
const Usuario = require('../modelos/usuario');


const listaRepartidores = async (req = request, res = response) => {

    try {
        
        let users_repartidores = await Usuario.find({ rol: 'Repartidor' }); //Busca en la coleccion "Usuarios" WHERE rol = 'Repartidor'

        res.json({
            ok: true,
            repartidores: users_repartidores
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const listaUsuarios = async (req = request, res = response) => {

    try {
        
        let usuarios = await Usuario.find({ });

        res.json({
            ok: true,
            usuarios
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: error
        });
    }

}

const usuarioByID = async (req = request, res = response) => {

    try {

        const { id_usuario } = req.params;
        
        let usuario = await Usuario.findOne({ id_usuario });

        res.json({
            ok: true,
            usuario
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: error
        });
    }

}


const nuevoRepartidor = async (req = request, res = response) => {

    try {

        if(req.body.nombre && req.body.clave && req.body.telefono && req.body.color) {

            let repartidor = new Usuario(req.body);

            let newRepartidor = await repartidor.save();

            if(newRepartidor) {

                res.json({
                    ok: true,
                    repartidor: newRepartidor
                });
            }
            else {
                res.json({
                    ok: false,
                    error: 'Error al Registrar Repartidor!'
                });
            }
            return;

        }

        res.json({
            ok: false,
            error: 'Faltan Datos'
        });

    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }

}


















/*const repartidores = async () => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM repartidores', (error, data) => {
            if(error) reject(error);
            resolve(data);
        });
    });
}



const crearRepartidor = async ({nombre, clave, telefono, color}) => {
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO repartidores (id_orden, nombre, clave, telefono, coordenadas, color) VALUES (NULL, ?, ?, ?, NULL, ?)', [nombre, clave, telefono, color], (error, data) => {
            if(error) reject(error);
            resolve(`Repartidor ${nombre} Registrado Correctamente!`);
        });
    });
}*/



module.exports = {
    listaRepartidores,
    listaUsuarios,
    nuevoRepartidor,
    usuarioByID
}