var fs = require('fs');
var util = require('util');

fs.stat('./phoenix5a.png', function(err,stats) {
   if (err) return console.log(err);
   console.log(util.inspect(stats));
});
