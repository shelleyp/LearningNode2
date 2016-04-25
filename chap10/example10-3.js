var net = require('net');
var redis = require('redis');

var server = net.createServer(function(conn) {
   console.log('connected');

   // create Redis client
   var client = redis.createClient();

   client.on('error', function(err) {
     console.log('Error ' + err);
   });

   // sixth database is image queue
   client.select(6);
   // listen for incoming data
   conn.on('data', function(data) {
      console.log(data + ' from ' + conn.remoteAddress + ' ' +
        conn.remotePort);

      // store data
      client.rpush('images',data);
   });

}).listen(3000);
server.on('close', function(err) {
   client.quit();
});

console.log('listening on port 3000');
