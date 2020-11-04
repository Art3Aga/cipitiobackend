const { request, response } = require('express');
const md5 = require('md5');
const { connection } = require('../base_datos/config');
const Cliente = require('../modelos/cliente_model');



const listaClientes = async (req = request, res = response) => {

    try {
        
        let clientesList = await Cliente.find({});

        res.json({
            ok: true,
            clientes: clientesList
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: error
        });
    }

}


const loginCliente = async (req = request, res = response) => {

    try {
        

        if(req.body.email && req.body.clave) {

            req.body.clave = md5(req.body.clave);

            const { email, clave } = req.body;

            let cliente = await Cliente.findOne({ email, clave });

            if(cliente) {
                
                res.json({
                    ok: true,
                    cliente
                });
            }
            else {

                res.json({
                    ok: false,
                    data: 'Email o Clave Incorrectos!'
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


const nuevoCliente = async (req = request, res = response) => {

    try {

        if(req.body.nombre && req.body.telefono && req.body.email && req.body.clave) {

            req.body.clave = md5(req.body.clave);

            let client = await Cliente.findOne({ email: req.body.email });

            if(client) {

                res.json({
                    ok: false,
                    data: 'Este Email ya está registrado a una cuenta'
                });
                return;
            }

            const newCliente = new Cliente(req.body);
            let clienteRegistrado = await newCliente.save();

            if(clienteRegistrado) {
                res.json({
                    ok: true,
                    cliente: clienteRegistrado
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar Cliente!'
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


















const clientes = async () => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clientes', (error, data) => {
            if(error) reject(error);
            resolve(data);
        });
    });
}



const registroCliente = async ({nombre, telefono, email, clave}) => {
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO clientes (nombre, telefono, email, clave) VALUES (?, ?, ?, ?)', [nombre, telefono, email, md5(clave)], (error, data) => {
            if(error) reject(error);
            resolve({nombre, telefono, email, clave});
        });
    });
}

const registroDireccion = async ({id_cliente, direccion, referencia, coordenadas}) => {
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO direcciones_clientes (id_cliente, direccion, referencia, coordenadas) VALUES (?, ?, ?, ?)', [id_cliente, direccion, referencia, coordenadas], (error, data) => {
            if(error) reject(error);
            resolve({id_cliente, direccion, referencia, coordenadas});
        });
    });
}


const verificarCliente = async ({email, clave}) => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clientes WHERE email = ? AND clave = ?', [email, md5(clave)], (error, data) => {
            if(error) reject(error);
            resolve(data[0]);
        });
    });
}


const verificarEmail = async (email) => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clientes WHERE email = ?', email, (error, data) => {
            if(error) reject(error);
            resolve(data[0]);
        });
    });
}


module.exports = {
    listaClientes,
    nuevoCliente,
    loginCliente
}