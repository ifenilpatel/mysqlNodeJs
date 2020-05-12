require('dotenv').config();
var mysql = require("mysql");

let db_host = process.env.db_host;
let db_user = process.env.db_user;
let db_password = process.env.db_password;
let db_database = process.env.db_database;

var connection = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database,
    multipleStatements: true
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");
});

module.exports = connection;