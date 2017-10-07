module.exports = function(username,password){
    var pathTo = "/public/login.html";
    if(username === 'bangnx' && password === 'bangnx') {
        pathTo = "/public/index.html";
    }
    return pathTo;
}