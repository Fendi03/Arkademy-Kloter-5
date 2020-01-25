const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_arka5'
});

connection.connect((err) =>{
    if (err){
        return console.log(err)
    }
 console.log('Database Connected')
});

module.exports = connection;