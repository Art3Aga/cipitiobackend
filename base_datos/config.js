
const mysql = require('mysql');


/*const connectionDB = async() => {

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'delivery_cipitio',
    });

    await connection.connect((error) => {
        if(error) throw error;
        console.log('DB Online!');
    });

}*/


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'delivery_cipitio',
});

connection.connect((error) => {
    if(error) throw error;
    console.log('DB Online!');
});

module.exports = {
    connection
};