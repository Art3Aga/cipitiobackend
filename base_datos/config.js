
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

/*const connection = mysql.createPool({
    host     : '162.241.226.91',
    port     :  3306,
    user     : 'pygconst_cipitio',
    password : 'deliverycipitio',
    database : 'pygconst_delivery_cipitio'
});

connection.getConnection((error) => {
    if(error) throw error;
    console.log('DB Online!');
});*/


/*const connection = mysql.createConnection({
    host: '162.241.226.91',
    user: 'pygconst_cipitio',
    password: 'deliverycipitio',
    database: 'pygconst_delivery_cipitio',
    port: 3306
});*/

const connection = mysql.createConnection({
    host: 'MYSQL5030.site4now.net',
    user: 'a460eb_testbd',
    password: 'Dev2020!',
    database: 'db_a460eb_testbd',
});

connection.connect((error) => {
    if(error) throw error;
    console.log('DB Online!');
});


module.exports = {
    connection
};