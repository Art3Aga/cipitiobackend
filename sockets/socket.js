const { io } = require('../index');
//const { listaOrdenes, nuevaOrden } = require('../controladores/orden_pedido_controller');
const { Router } = require('express');

const router = Router();


// Eventos de Sockets
io.on('connection', client => {

    console.log('Cliente conectado');
    //Actualizar el id del cliente por el id del socket que se acaba de conectar

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
        //Actualizar el id del cliente por un id new Date().valueOf()
    });

    client.on('configurar-usuario', () => {
        //Actualizar el nombre, y todo del usuario, mandarlos por parametro en el post
    });


    client.on('nueva-orden', (data) => {
        console.log('Nueva Orden');
        io.emit('get-ordenes', 'Consultar las Ordenes'); //El admin debe escuchar este evento y recargar las ordenes
    });

    /*client.on('get-ordenes', (data) => {
        console.log('Consultar las Ordenes');
    });*/

});
