var express = require('express');

var router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.get('/',function(req,res){
    res.render('index',{"id":5});
});

router.get('/about',function(req,res){
    res.end('This is about');
});

router.get('/home',function(req,res){
    res.end('This is /');
});

module.exports = router