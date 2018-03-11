var fib = function (n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

var Obj = function() { };

// modified from original
// callback is specifically included in argument list
// because accessing callback from arguments programatically is an 
// operation that blocks process.nextTick() until all are finished.
// Last use of doSomething sets CB for _all_ calls.
// oopsie, brain got twisted
// you should see me with regular expressions...it would make you cry

Obj.prototype.doSomething = function(arg1_, callback) {
 //  let callback_ = arguments[arguments.length - 1];
 //  callback = (typeof(callback_) == 'function' ? callback_ : null);
   let arg1 = typeof arg1_ === 'number' ? arg1_ : null;

   if (!arg1)
      return callback(new Error('first arg missing or not a number'));

      process.nextTick(function() {

         // block on CPU
         let data = fib(arg1);
         callback(null, data);
    });
}

let test = new Obj();
let number = 10;

test.doSomething(number, function(err,value) {
      if (err)
         console.error(err);
      else
         console.log('fibonaci value for %d is %d', number, value);
});

test.doSomething(33, function(err,value) {
     if (err) console.error(err);
     else console.log('well, %d', value);
});
console.log('called doSomething');
