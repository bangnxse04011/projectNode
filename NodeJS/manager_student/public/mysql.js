var mysql = require('mysql');

var conn = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : 'xuanbang',
    database : 'fsu1.bu1'
});

conn.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

module.exports = conn;