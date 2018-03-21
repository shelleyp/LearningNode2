# Learning Node 2nd edition

## Updates to examples for upcoming Node.js 10 release

### Chapter 5

I updated example5-3.js and example5-4.js to use  _base = __dirname_ to set path for accessing the resource, based on where the web server is currently situated. I mentioned __dirname in the book, but the examples should have used it by default. 

In addition, I updated example5-4.js to account for the breaking change in the MIME module. mime.lookup() is now mime.getType().

The book does not contain examples of the new experimental support for HTTP/2.  

I created a new example, _newhttps.js_, that creates a simple HTTPS server that responds with Hello World. It runs off of port 8000, and actually worked once I remembered to allow access to this port through my firewall. It's based on a certificate obtained from Let's Encrypt, which provides no cost digital certificates. You'll need to install a certificate and then adjust the example to fit your own environment. 

You'll find this example in the Chapter 7 example folder, since SSL is discussed in Chapter 7.

Support for HTTP/2 is still experimental, though it should be rolled out by default with Node v10. I might add an example once it is no longer experimental.
 
