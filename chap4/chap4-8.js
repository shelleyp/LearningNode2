var http = require('http');

console.time('hello-timer');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
  console.timeEnd('hello-timer');
  console.time('hello-timer');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
