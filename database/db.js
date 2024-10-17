const mysql = require('mysql2');  

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "malikshahid",
    database: "userauth",
  port: 3306,
}).promise(); ;
// Using the promise version of mysql2

module.exports = pool;
