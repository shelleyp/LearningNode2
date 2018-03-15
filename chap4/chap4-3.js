var test = {
   a : {
       b : {
          c : {
            d : 'test'
          }
       }
   }
}

// only two levels of nesting are printed out
console.log(test);

// three levels of nesting are printed
var str = JSON.stringify(test, null, 3);

console.log(str);
