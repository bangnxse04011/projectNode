var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'xuanbang',
    database : 'fsu1.bu1'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

module.exports = con;