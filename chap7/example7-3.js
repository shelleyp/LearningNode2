var net = require('net');
var fs = require('fs');

const unixsocket = '/home/somepath/nodesocket';

var server = net.createServer(function(conn) {
   console.log('connected');

   conn.on('data', function (data) {
      conn.write('Repeating: ' + data);
   });

   conn.on('close', function() {
        console.log('client closed connection');
   });

}).listen(unixsocket);

server.on('listening', function() {
    console.log('listening on ' + unixsocket);
});



// if exit and restart server, must unlink socket
server.on('error',function(err) {
   if (err.code == 'EADDRINUSE') {
      fs.unlink(unixsocket, function() {
          server.listen(unixsocket);
      });
   } else {
      console.log(err);
   }
});

process.on('uncaughtException', function (err) {
    console.log(err);
});
