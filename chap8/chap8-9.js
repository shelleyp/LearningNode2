var cp = require('child_process'),
    cp1 = cp.fork('child.js'),
    http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('handled by parent\n');
});

server.on('listening', function () {
    cp1.send('server', server);
});

server.listen(3000);
