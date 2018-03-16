var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/javascript',
    'Content-Encoding': 'gzip,deflate'
  }
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  var data = '';
  res.on('data', function (chunk) {
      data+=chunk;
  });


  res.on('end', function() {
    console.log(data)
  })

});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// stream gzipped file to server
var readable = fs.createReadStream('./test.png');
readable.pipe(gzip).pipe(req);
