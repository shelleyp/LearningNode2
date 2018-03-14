# Learning Node 2nd edition  

## Updates to examples for upcoming Node.js 10 release

### Chapter 3

Several of the examples, both labeled (example3-x.js) and not (chap3-x.js) were out of sync. I've since put them back in order, as well as created missing example files. 

The chap3-1.js no longer throws an error. Passing in _console_ without first adding it to the Sandbox context just doesn't work, but it no longer throws an error.

The chap3-8.js generated an error because the mime module it was depended on created a breaking change from the book's earlier version. mime.lookup() has been renamed to mime.getType(). The example was modified. 

There's a new version of example3-3.js, using async to remove the pyramid of doom from the chapter 2 example. Async no longer allowed the loop within the waterfall, so it has been pulled out and processed independent of the waterfall. It's a cleaner approach.

The new version is now labeled example3-6.js to match the numbering in the book.

Reminder: even though forEach is synchronous, the waterfall doesn't block, so each file is processed in parallel. The data files will be processed out of order, as you'll note from log file.

Following examples were modified to work, as is
example3-1.js
chap3-4.js
