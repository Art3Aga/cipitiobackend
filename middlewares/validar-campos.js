

//const { request, response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {

    const errores = validationResult(req);

    if(!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }

    next(); // Mover al siguiente middleware o el controlador de la ruta si ya no hay errores


}


module.exports = {
    validarCampos
}