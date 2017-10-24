var express = require('express');
var users = require('./router/users.js');
var account = require('./router/account.js');
var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

app.use('/users',users);
app.use('/account',account);

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);


