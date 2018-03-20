# Learning Node 2nd edition

## Updates to examples for upcoming Node.js 10 release

### Chapter 11

Starting with Node 9.8.0, instead of using _node debug_ to run the internal debugger, you'll need to run _node inspect_.

The watched variables throw uncaught ReferenceError errors now, though the application still continues. You'll want to define watchers in context of their use. 

Starting with Node v6.3, Node now provides a built-in DevTools-based debugger which basically deprecates node-inspector covered in the book. On your desktop machine, run the following to use Node inspector:

node --inspect filename

If you open about:inspect, you should see the application listed in Remote Target.  

This built-in version of Node Inspector replaces the one listed in the book.

As for the tools in the chapter, they're still all active, still viable. There are new tools now, but the old favorites still work. 
