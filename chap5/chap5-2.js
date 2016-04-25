var http = require('http');

var server = http.createServer().listen(8124);

server.on('request', function(request,response) {

   console.log(request.headers);
   console.log(request.rawHeaders);

   // pulling host
   console.log(request.headers.host);
   console.log(request.rawHeaders[0] +  ' is ' + request.rawHeaders[1]);

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
});

console.log('server listening on 8214');
