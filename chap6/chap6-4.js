var fs = require('fs');

fs.writeFile('./some.txt','Writing to a file',function(err) {
      if (err) return console.error(err);
      fs.readFile('./some.txt','utf-8', function(data,err) {
         if (err) return console.error(err);
         console.log(data);
      });
});
