const { request, response } = require('express');
const md5 = require('md5');
//const { connection } = require('../base_datos/config');
const Cliente = require('../modelos/cliente_model');
const Direccion = require('../modelos/direccion_model');



const listaClientes = async (req = request, res = response) => {

    try {
        
        let clientesList = await Cliente.find({}); //Busca en la coleccion "Clientes" pero al no tener ningun parametro de busqueda retorna todo (SELECT * FROM Clientes)

        res.json({
            ok: true,
            clientes: clientesList
        })

    } catch (error) {
        res.json({
            ok: false,
            mensaje: error
        });
    }

}

const clienteByID = async (req = request, res = response) => {

    try {

        const { id_cliente } = req.params;
        
        let cliente = await Cliente.findOne({ id_cliente });

        res.json({
            ok: true,
            cliente
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const loginCliente = async (req = request, res = response) => {

    try {
        

        if(req.body.email && req.body.clave) {

            req.body.clave = md5(req.body.clave);

            const { email, clave } = req.body;

            let cliente = await Cliente.findOne({ email, clave }); // Busca solo un item en la coleccion Clientes WHERE email = body_del_post AND clave = body_del_post

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
        res.json({
            ok: false,
            mensaje: error
        });
    }
    
}


const nuevoCliente = async (req = request, res = response) => {

    try {

        if(req.body.nombre && req.body.telefono && req.body.email && req.body.clave) {

            req.body.clave = md5(req.body.clave);

            let client = await Cliente.findOne({ email: req.body.email }); // Busca solo un item en la coleccion Clientes WHERE email = body_del_post

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
        res.json({
            ok: false,
            mensaje: error
        });
    }

}



const nuevaDireccion = async (req = request, res = response) => {

    try {

        const { id_cliente, direccion, referencia, coordenadas, activo } = req.body;

        if(id_cliente && direccion && referencia && coordenadas && activo) {

            let direccion = new Direccion(req.body);
            let newDirection = await direccion.save(); //Registro en la coleccion Direccions

            if(newDirection) {
                res.json({
                    ok: true,
                    direccion: newDirection
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar Direccion!'
                });
            }

            return;
        }
        res.json({
            ok: false,
            data: 'Faltan Datos'
        });
        
    } catch (error) {
        res.json({
            ok: false,
            mensaje: error
        });
    }

}

const direccionesByCliente = async (req = request, res = response) => {

    try {
        
        const { id_cliente } = req.params;

        let direcciones = await Direccion.find({ id_cliente }).sort({ activo: -1 });

        res.json({
            ok: true,
            direcciones
        });


    } catch (error) {
        res.json({
            ok: false,
            mensaje: error
        });   
    }

}



module.exports = {
    listaClientes,
    nuevoCliente,
    loginCliente,
    nuevaDireccion,
    direccionesByCliente,
    clienteByID
}