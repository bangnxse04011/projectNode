var connection = require('./mysql.js');

module.exports = function(strQuerry){
    connection.query(strQuerry, function(err,result){
        if(err) throw err;
        console.log(result);
    });
};