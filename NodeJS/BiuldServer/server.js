var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var authen = require('./js/login.js');
var acc = require('./js/accountDAO.js');
var stu = require('./js/studentDAO.js');


var server = require('http').Server(app);
var app = express();

var read = fs.createReadStream(__dirname + '/readme.txt','utf8');

var io = require('socket.io')(server);

server.listen(9999);

io.on('connection',function(socket){
    console.log('Co nguoi ket noi');
});

read.on('data',function(data1){
    console.log("data");
    console.log(data1);
});

app.use(bodyParser());
app.engine('view engine','ejs');
app.use(express.static('public'));

app.get('/' , function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/login' , function(req,res){
    var result = acc('SELECT * FROM account_manager');
    var stuResult = stu("INSERT INTO student_manager(student_name,student_mark) VALUES('bangnx1','10');" );
    console.log(JSON.stringify(result));
    console.log(stuResult);
    res.render('index');
});

app.post('/doLogin' , function(req,res){
    var un = req.body.uname;
    var ps = req.body.pword;
    var result = authen(un,ps);
    console.log(result);
    res.sendFile(__dirname + result);
});

app.get('/rest/find-all/:id',function(req,res){
    var account = [{
        'username' : 'bangnx1',
        'password' : 'bangnx'
    }];
    res.end(JSON.stringify(account));
});