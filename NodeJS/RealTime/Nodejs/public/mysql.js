var connection = require('mysql');

connection.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'xuanbang',
    database : 'student_manager'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

module.exports = connection;