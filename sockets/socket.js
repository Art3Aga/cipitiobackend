const { io } = require('../index');
//const { listaOrdenes, nuevaOrden } = require('../controladores/orden_pedido_controller');
const { Router } = require('express');

const router = Router();


// Eventos de Sockets
io.on('connection', client => {

    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });


    client.on('nueva-orden', (data) => {
        console.log('Nueva Orden');
        io.emit('get-ordenes', 'Consultar las Ordenes'); //El admin debe escuchar este evento y recargar las ordenes
    });

    /*client.on('get-ordenes', (data) => {
        console.log('Consultar las Ordenes');
    });*/

});
