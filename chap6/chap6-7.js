var fs = require('fs');

var readable =
  fs.createReadStream('./working.txt');

var writable = fs.createWriteStream('./working2.txt');

readable.pipe(writable);
