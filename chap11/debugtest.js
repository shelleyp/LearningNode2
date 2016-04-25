var fs = require('fs');
var concat = require('./external.js').concatArray;

var test = 10;
var second = 'test';

for (var i = 0; i <= test; i++) {
   debugger;
   second+=i;
}

setTimeout(function() {
   debugger;
   test = 1000;
   console.log(second);
}, 1000);

fs.readFile('./log.txt', 'utf8', function (err,data) {
   if (err) {
      return console.log(err);
   }

   var arry = ['apple','orange','strawberry'];
   var arry2 = concat(data,arry);
   console.log(arry2);
});
