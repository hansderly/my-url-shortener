const mysql = require('mysql');
const config = require('config');

// DB INFOS
const dbHost = config.get('dbHost');
const userName = config.get('userName');
const password = config.get('password');
const dbName = config.get('dbName');

const connection = mysql.createConnection({
  host     : dbHost,
  user     : userName,
  password : password,
  database : dbName
});

connection.connect((err) => {
    if (err) throw err;
    console.log('DB connected');    
});

module.exports = connection;