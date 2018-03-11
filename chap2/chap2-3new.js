"use strict";

let buf = Buffer.from('This is my pretty example');
let json = JSON.stringify(buf);

console.log(json);
