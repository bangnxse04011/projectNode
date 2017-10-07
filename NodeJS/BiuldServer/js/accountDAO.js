var connection = require('./mysql.js');

module.exports = function(strQuerry) {
    connection.query(strQuerry,function(err,result,fields){
        console.log(result);
        return JSON.stringify(result);
    });
}
