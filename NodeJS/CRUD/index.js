var express = require('express');

var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);


