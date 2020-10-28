const { request, response } = require('express');
const { connection } = require('../base_datos/config');


const listaMenus = async (req = request, res = response) => {

    try {
        
        let lista = await menus();

        res.json({
            ok: true,
            menus: lista
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const nuevoMenu = async (req = request, res = response) => {

    try {

        if(req.body.nombre && req.body.descripcion && req.body.precio && req.body.imagen) {

            let newMenu = await crearMenu(req.body);

            if(newMenu) {

                res.json({
                    ok: true,
                    data: newMenu
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar Menu!'
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


















const menus = async () => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM menus', (error, data) => {
            if(error) reject(error);
            resolve(data);
        });
    });
}



const crearMenu = async ({nombre, descripcion, precio, imagen}) => {
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO menus (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)', [nombre, descripcion, precio, imagen], (error, data) => {
            if(error) reject(error);
            resolve(`${nombre} Registrado Correctamente al Menu!`);
        });
    });
}



module.exports = {
    listaMenus,
    nuevoMenu
}