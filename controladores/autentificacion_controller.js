
const { request, response } = require('express');
const { connection } = require('../base_datos/config');
const md5 = require('md5');
const Usuario  = require('../modelos/usuario');


const login = async (req = request, res = response) => {
    

    try {

        if(req.body.nombre && req.body.clave) {

            req.body.clave = md5(req.body.clave);
            
            let usuario = await Usuario.findOne({ nombre: req.body.nombre, clave: req.body.clave });
            
            if(usuario) {
                res.json({
                    ok: true,
                    usuario
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
            mensaje: error
        });
    }
    

}



const registro = async (req = request, res = response) => {

    try {

        if(req.body.nombre && req.body.clave && req.body.telefono && req.body.rol) {

            req.body.clave = md5(req.body.clave);

            const usuario = new Usuario(req.body);
            let usuarioRegistrado = await usuario.save();
            if(usuarioRegistrado) {
                res.json({
                    ok: true,
                    data: usuarioRegistrado,
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
            mensaje: error
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