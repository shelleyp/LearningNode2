"use strict";

const fs = require('fs');
const { URL } = require ('url');
const dir = __dirname;

const fileUrl = new URL('file://' + dir + '/new.txt');
console.log(fileUrl);

fs.open(fileUrl,0x666, function(err, fd) {
     if (err) return console.error(err);
     fs.write(fd, 'First line', 'utf-8', function(err,written, str) {
        if (err) return console.error(err);
        var buf = new Buffer(written);
        fs.read(fd, buf, 0, written, 0, function (err, bytes, buffer) {
           if (err) return console.error(err);
           console.log(buf.toString('utf8'));
        });
      });
});
