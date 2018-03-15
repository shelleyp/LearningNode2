var test = {
   a : {
       b : {
          c : {
            d : 'test'
          }
       }
   }
}

var str = require('util').inspect(test, {showHidden: true, depth: 4 });
console.log(str);
