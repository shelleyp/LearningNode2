var util = require('util');

var today = new Date();

var test = {
   a : {
       b : {
          c : {
            d : 'test'
          },
          c2 : 3.50
       },
       b2 : true
   },
   a2: today
}

util.inspect.styles.boolean = 'blue';

// output with util.inspect direct formatting
var str = util.inspect(test, {depth: 4, colors: true });
console.log(str);

// output using console.dir and options
console.dir(test, {depth: 4, colors: true});

// output using basic console.log
console.log(test);

// and JSON stringify
console.log(JSON.stringify(test, null, 4));
