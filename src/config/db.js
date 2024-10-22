const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost', 
    user:'root',
    password:'root',
    database:'Userlist'
});

module.exports = pool.promise();