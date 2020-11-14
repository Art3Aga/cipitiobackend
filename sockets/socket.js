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
        //el IO.EMIT es para todas las personas del servidor
        console.log('Nueva Orden');
        io.emit('get-ordenes', 'Consultar las Ordenes'); //El admin debe escuchar este evento y recargar las ordenes
    });

    console.log(client.handshake.headers);
    //console.log(client);
    //^3.0.1
    //client.join('id_cliente_usuario');

    client.on('get-repartidor-orden', (data) => {
        //data.de, data.para, data.repartidor
        io.to('id_del_cliente_a_enviar_"para"').emit('get-repartidor-orden', data);
        console.log('Nuevo Repartidor Asignado a una Orden');
        //io.emit('get-ordenes', 'Consultar las Ordenes'); //El admin y los clientes debe escuchar este evento y recargar el repartidor asignado a la orden
    });

});
