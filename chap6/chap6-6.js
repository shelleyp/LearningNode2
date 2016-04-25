'use strict';

var fs = require('fs');
var path = require('path');

fs.readdir ('./',function(err, files) {
   for (let file of files) {
      console.log(file);
      if (path.extname(file) == '.gz') {
         fs.unlink('./' + file);
      }
   }
});
