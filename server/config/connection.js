const mysql = require('mysql2');

const connection = mysql.createConnection(
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PASS,
    process.env.DB_DB
);

connection.connect(function (err) {
    if(err)
    throw (err)
});

module.exports = connection;