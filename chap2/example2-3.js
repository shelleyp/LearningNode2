var buf1 = new Buffer('this is the way we build our buffer');
var lnth = buf1.length;

// create new buffer as slice of old
var buf2 = buf1.slice(19,lnth);
console.log(buf2.toString()); // build our buffer

//modify second buffer
buf2.fill('*',0,5);
console.log(buf2.toString()); // ***** our buffer

// show impact on first buffer
console.log(buf1.toString()); // this is the way we ***** our buffer
