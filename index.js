
module.exports = function () {
    var http = require('http');
    var app = function (req,res,next) {
        res.writeHead(404);
        res.end('404-NOT FOUND');
        };
    app.listen = function (port,done) {
        // body...
        return http.createServer(this).listen(port,done);
    };
    return app;
}
