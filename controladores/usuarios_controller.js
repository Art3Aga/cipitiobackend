const { request, response } = require('express');
const { connection } = require('../base_datos/config');
//const Usuario  = require('../modelos/usuario');


const listaRepartidores = async (req = request, res = response) => {

    try {
        
        let users_repartidores = await repartidores();

        res.json({
            ok: true,
            repartidores: users_repartidores
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const nuevoRepartidor = async (req = request, res = response) => {

    try {

        if(req.body.nombre && req.body.clave && req.body.telefono && req.body.color) {

            let newRepartidor = await crearRepartidor(req.body);

            if(newRepartidor) {

                res.json({
                    ok: true,
                    data: newRepartidor
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar Repartidor!'
                });
            }
            return;

        }

        res.json({
            ok: false,
            data: 'Faltan Datos'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: error
        });
    }

}


















const repartidores = async () => {
    
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
}



module.exports = {
    listaRepartidores,
    nuevoRepartidor
}