const { request, response } = require('express');
//const { connection } = require('../base_datos/config');
const Menu = require('../modelos/menu_model');


const listaMenus = async (req = request, res = response) => {

    try {
        
        let menus = await Menu.find({});

        res.json({
            ok: true,
            menus
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const nuevoMenu = async (req = request, res = response) => {

    try {

        const { nombre, descripcion, precio, imagen } = req.body;

        if(nombre && descripcion && precio && imagen) {

            let menu = new Menu(req.body);

            let newMenu = await menu.save();


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
        res.json({
            ok: false,
            mensaje: error
        });
    }

}


















/*const menus = async () => {
    
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
}*/



module.exports = {
    listaMenus,
    nuevoMenu
}