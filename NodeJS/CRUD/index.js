var express = require('express');
var jwt = require('jsonwebtoken');
var users = require('./router/users.js');
var account = require('./router/account.js');
var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

app.use('/users',users);
app.use('/account',account);

app.get("/",ensureToken,function(req,res){
    res.json({
        message : "Please login to system"
    });
});

app.post("/",function(req,res){
    const user = {id : 3};
    const token = jwt.sign({user},"my_scret_key");
    res.json({
        token : token
    });
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[0];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
}

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);


