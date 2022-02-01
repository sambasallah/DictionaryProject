const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '!@+Y7enqxal',
  database : 'entries'
});

module.exports = connection;