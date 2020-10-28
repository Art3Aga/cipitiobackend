
const { request, response } = require('express');
const { connection } = require('../base_datos/config');
const md5 = require('md5');
const Usuario  = require('../modelos/usuario');


const login = async (req = request, res = response) => {
    

    try {

        if(req.body.usuario && req.body.clave) {
            
            let usuario = await logueadoUser(req.body);
            
            if(usuario) {
                res.json({
                    ok: true,
                    data: usuario,
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Usuario o Clave Incorrectos!'
                });
            }
            return;
        }

        res.json({
            ok: false,
            data: 'Faltan Datos'
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error'
        });
    }
    

}



const registro = async (req = request, res = response) => {

    try {

        if(req.body.nombre && req.body.clave && req.body.telefono && req.body.rol) {

            const usuario = new Usuario(req.body);
            let registrar = await nuevoUsuario(usuario);
            if(registrar) {
                res.json({
                    ok: true,
                    data: registrar,
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar Usuario!'
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
            mensaje: 'Error'
        });
    }
    
}


const logueadoUser = async ({usuario, clave}) => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuarios_empresa WHERE nombre = ? AND clave = ?', [usuario, md5(clave)], (error, data) => {
            if(error) reject(error);
            resolve(data[0]);
        });
    });
}



const nuevoUsuario = async ({nombre, clave, telefono, rol}) => {

    return new Promise((resolve, reject) =>  {
        connection.query('INSERT INTO usuarios_empresa (nombre, clave, telefono, rol) VALUES (?, ?, ?, ?)', [nombre, md5(clave), telefono, rol], (error, data) => {
            if(error) reject(error);
            resolve(`Usuario ${nombre} Registrado Correctamente al Rol de ${rol}!`);
        });
    });

}



module.exports = {
    login,
    registro
}