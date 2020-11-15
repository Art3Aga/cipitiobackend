const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//DB Config
const { connection } = require('./base_datos/config');
connection();

//connection.query

// App de Express
const app = express();


//Lectura y parseo del Body
//app.use( express.json() );

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');





// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );
app.use( cors({ origin: true, credentials: true }) );

//Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

//Rutas
app.use( '/api/login', require('./rutas/autentificacion') );
app.use( '/api/usuarios', require('./rutas/usuarios') );
app.use( '/api/menus', require('./rutas/menus') );
app.use( '/api/clientes', require('./rutas/clientes') );
app.use( '/api/orden_pedido', require('./rutas/orden_pedido') );
app.use( '/api/promos', require('./rutas/promo') );



server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});


