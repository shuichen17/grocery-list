const mysql = require('mysql');
//const config = require('dbconfig.js');
//creating a coometion configuration object to connect to the database for 
// this application using our username and password
const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'grocery_list'
}
)
// connect to the database using the abouve configuration settings
connection.connect();
//connection.query('SELECT * FROM groceries')

//export the connection 
module.exports = connection;