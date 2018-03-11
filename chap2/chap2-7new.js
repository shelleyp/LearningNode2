const buf1 = Buffer.from('1 is number one');
const buf2 = Buffer.from('2 is number two');

var buf3 = Buffer.alloc(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2)); // -1
console.log(buf2.compare(buf1)); // 1
console.log(buf1.compare(buf3)); // 0
