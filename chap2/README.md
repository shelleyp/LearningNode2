# Updates

## Updates to examples for upcoming Node.js 10 release

The examples for Chapter 2 of Learning Node 2nd edition work with both the latest LTS as well as Current (9.x). They should continue working the same with the upcoming Node 10 LTS release. However, there is one fairly significant caveat:

The use of the Buffer constructor ( new Buffer()) will now generate a runtime deprecation warning. 

The Buffer constructor has been deprecated since versions 5/6, as I note in the book. However, with previous Node versions, Buffer constructor is deprecated in the documentation. With Node 10, the use of Buffer constructor will now generate a runtime warning. 

The applications should still run the same, but I created new copies of the example files that used the Buffer constructor and replaced it with the appropriate alternative:

Buffer.alloc()
Buffer.from()

The new code example files are named the same as the ones replaced, with the addition of *new*. 

In addition, since newer versions of ECMAScript are encorporated by default in the V8 engine that underlies Node, I'm also starting to incorporate some of the newer language constructs, even though they *technically* aren't specific to Node.

Example 2-5 is corrected. It uses process.nextTick() to provide asynchronous callback functionality. This function queues callbacks until all events are processed. In the example, I'm pulling the callback function from the arguments list. What's happening in the old code is the _last_ callback function is used for all the callbacks, because process.nextTick() is processing _all_ of the callback requests before making the callback call. 

Now, callback function and argument values are correctly paired. However, if you don't pass a callback function in, crash and burn. 

Shelley
