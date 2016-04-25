'use strict'

// example, courtesy of Dr. Axel Rauschmayer
// http://www.2ality.com/2014/12/es6-proxies.html


let target = {};
    let handler = {
        get(target, propKey, receiver) {
            console.log('get ' + propKey);
            return 123;
        }
    };

let proxy = new Proxy(target, handler);

console.log(proxy.foo);

proxy.bar = 'abc';
console.log(target.bar);
