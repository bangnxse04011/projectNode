var pg = require('pg');

var config = {
    user : 'bangnx1',
    password : 'bangnx1',
    database : 'DB_Nodejs',
    host : 'localhost',
    port : '5432',
}

var pool = new pg.Pool(config);

module.exports = pool;