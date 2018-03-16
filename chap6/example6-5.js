var http = require('http');
var zlib = require('zlib');
var fs = require('fs');

var server = http.createServer().listen(8124);

server.on('request', function(request,response) {

   if (request.method == 'POST') {
      var chunks = [];

      request.on('data', function(chunk) {
         chunks.push(chunk);
      });

      request.on('end', function() {
         var buf = Buffer.concat(chunks);
         zlib.unzip(buf, function(err, result) {
            if (err) {
               response.writeHead(500);
               response.end();
               return console.log('error ' + err);
            }
            var timestamp = Date.now();
            var filename = './done' + timestamp + '.png';
            fs.createWriteStream(filename).write(result);
         });

         response.writeHead(200, {'Content-Type': 'text/plain'});
         response.end('Received and undecompressed file\n');
      });
   }
});

console.log('server listening on 8214');
