const mysql = require("mysql");
const dbConf = require("../config/db.config");

// create a connection to db
const connection = mysql.createConnection({
    host: dbConf.HOST,
    user: dbConf.USER,
    password: dbConf.PASSWORD,
    database: dbConf.DB
});

// open connection
connection.connect(error => {
    if (error) throw error;
    console.log("Connected to the database");
});

module.exports = connection;
