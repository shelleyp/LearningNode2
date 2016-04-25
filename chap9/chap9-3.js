const test = ['one','two','three'];

const test2 = {apples : 1, peaches: 2};

test = test2; //fails

test[0] = test2.peaches;

test2.apples = test[2];

console.log(test); // [ 2, 'two', 'three' ]
console.log(test2); // { apples: 'three', peaches: 2 }
