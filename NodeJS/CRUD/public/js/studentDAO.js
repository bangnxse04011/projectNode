var getConnection = require('./connection.js')

exports.findAll = function(){
    getConnection.connect(function(err,client,done){
        if(err) throw err;
        client.query("SELECT * FROM student", function(err,result){
            done();
            if(err) throw err;
            console.log(result);
        });
    });
}

