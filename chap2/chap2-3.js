"use strict";

let buf = new Buffer('This is my pretty example');
let json = JSON.stringify(buf);

console.log(json);
