var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();

var inp = fs.createReadStream('test.png');
var out = fs.createWriteStream('test.png.gz');

inp.pipe(gzip).pipe(out);
