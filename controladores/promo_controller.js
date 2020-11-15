const { request, response } = require('express');
//const { connection } = require('../base_datos/config');
const Promo = require('../modelos/promos_model');


const listaPromo = async (req = request, res = response) => {

    try {
        
        let promo = await Promo.find({});

        res.json({
            ok: true,
            promo
        });

    } catch (error) {
        res.json({
            ok: false,
            mensaje: 'Error'
        });
    }

}


const nuevoPromo = async (req = request, res = response) => {

    try {

        const { menus, titulo, tipo, descripcion, precio, descuento, imagen } = req.body;

        if(menus, titulo, tipo, descripcion, precio, descuento, imagen) {

            let promo = new Promo(req.body);

            let newPromo = await promo.save();

            if(newPromo) {

                res.json({
                    ok: true,
                    menu: newPromo
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Registrar La Promocion!'
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


const updatePromo= async (req = request, res = response) => {

    try {

        const { id_promo,menus, titulo, tipo, descripcion, precio, descuento, imagen } = req.body;

        if(menus, titulo, tipo, descripcion, precio, descuento, imagen) {

            let promo = new Promo(req.body);

            let newPromo = await promo.updateOne({ id_promo }, { menus, titulo, tipo, descripcion, precio, descuento, imagen }); //UPDATE Menus SET nombre, descripcion, ... = ? WHERE id_menu

            if(newPromo) {

                res.json({
                    ok: true,
                    menu: newPromo
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Editar La Promocion '
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


const deletePromo = async (req = request, res = response) => {

    try {

        const { id_promo } = req.body;

        if(id_promo) {

            let promo = new Promo(req.body);

            let promoDeleted = await promo.deleteOne({ id_promo });

            if(promoDeleted) {

                res.json({
                    ok: true,
                    menu: 'Promocion Borrada Correctamente!'
                });
            }
            else {
                res.json({
                    ok: false,
                    data: 'Error al Eliminar La Promocion!'
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
    listaPromo,
    nuevoPromo,
    updatePromo,
    deletePromo,
}