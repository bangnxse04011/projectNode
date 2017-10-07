var express = require('express');
var conn = require('./public/mysql.js');
var bodyParser = require('body-parser');
var app = express();
var port = 9999;

function deletePath() {
    return '/delete/:id';
}

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');
var urlEncoded = bodyParser.urlencoded({extended : false});

/**
 * Create listen and open server
 */
app.listen(port,function(){
    console.log('Create server by port ' + port);
});

/**
 * Method Get 
 */
app.get('/',function(req,res){
    conn.query('SELECT * FROM student_manager',function(err,result){
        if(err) throw err;
        res.render('index',{studen:result});
    });
});

/**
 * Method update
 */
app.get(deletePath(),function(req,res){
    var id = req.params.id;
    conn.query('DELETE FROM student_manager WHERE student_id =' + id);
    res.redirect('/');
});

