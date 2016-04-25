var crypto = require('crypto');
var fs = require('fs');
var hash = crypto.createHash('sha256');
hash.setEncoding('hex');

var input = fs.createReadStream('main.txt');
var output = fs.createWriteStream('mainhash.txt');

input.pipe(hash).pipe(output);
