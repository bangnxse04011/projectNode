var express = require('express');
var conn = require('./public/mysql.js');

var app = express();
var port = 9999;

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(){
    console.log('Create server by port ' + port);
});

app.get('/',function(req,res){
    conn.query('SELECT * FROM student_manager',function(err,result){
        if(err) throw err;
        res.render('index',{studen:result});
    });
});