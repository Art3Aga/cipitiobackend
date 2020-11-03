
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'MYSQL5030.site4now.net',
    user: 'a460eb_testbd',
    password: 'Dev2020!',
    database: 'db_a460eb_testbd'
    /*host: 'localhost',
    user: 'root',
    password: '',
    database: 'delivery_cipitio'*/
});

connection.connect((error) => {
    if(error) throw error;
    console.log('DB Online!');
});


module.exports = {
    connection
};