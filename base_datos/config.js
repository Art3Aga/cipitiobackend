
const mongoose = require('mongoose');

const connection = async () => {

    try {
        
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB ONLINE!');

    } catch (error) {
        console.log(error);
        throw new Error(`Error en la base de datos: ${error}`)
    }

}


/*const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'MYSQL5030.site4now.net',
    user: 'a460eb_testbd',
    password: 'Dev2020!',
    database: 'db_a460eb_testbd'
});

connection.connect((error) => {
    if(error) throw error;
    console.log('DB Online!');
});*/


module.exports = {
    connection
};