var express = require('express');

var router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.get('/account',function(req,res){
    res.end('This is /');
});

router.get('/about-account',function(req,res){
    res.end('This is about');
});

router.get('/home-account',function(req,res){
    res.end('This is /');
});

module.exports = router