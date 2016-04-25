var buf1 = new Buffer('this is a new buffer with a string');

// copy buffer
var buf2 = new Buffer(10);
buf1.copy(buf2);

console.log(buf2.toString()); // this is a
