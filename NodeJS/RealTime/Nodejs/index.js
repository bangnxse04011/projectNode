var express = require('express');
var app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./views');

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
  


io.on('connection',function(socket){

    console.log('Find Person Connection ' + socket.id);

    socket.on('disconnect',function(){
        console.log('Find Person disconnect ' + socket.id);
    });

    socket.on('Client',function(data){
        console.log(socket.id + ' send data ' + data);
        io.sockets.emit('Server',data);
    });
});

app.get('/', function(req,res){
    res.render('index');
});