

const jwt = require('jsonwebtoken');


const generarJWT  = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = { uid };
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '12h'
        }, (error, token) => {
            if(error) {
                //No se pudo crear el token
                reject('No se pudo crear el token');
            }
            else {
                resolve(token);
            }
        });

    });

}

module.exports = {
    generarJWT
}