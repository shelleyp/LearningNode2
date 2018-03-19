# Learning Node 2nd edition

## Updates to examples for upcoming Node.js 10 release

### Chapter 10 

Times change. When I wrote this book, AngularJS was the be all, end all for frameworks. Now, everything is all React, all the time.

However, times don't change as much as it seems from the noise. AngularJS is still a major framework. What's changed is we have new options now, including React, as well as Vue.

Angular is Google's baby, which means support from a major tech company. However, React is Facebook's baby, so ditto. Whether you want to buy into each of the company's view of technology is your choice, and the choice of your team. 

Vue is a more independent open source development effort, started by a former Google engineer, Evan You. If buying into the biggies isn't for you, you might check out Vue.js. 

One thing that has remained stable since this book was written was Express. The code in the book is still viable and the only change is that the Express Generator creates a package.json.lock file now, rather than a package.json file. 

Thankfully, database API support has also remained relatively stable. 

The chapter also touched on database support. The most popular and best supported MySQL Node module is mysql (https://github.com/mysqljs/mysql), a Node driver for MySQL. 

The best supported SQL Server module is now mssql (https://github.com/tediousjs/node-mssql). The tedious module is still the best supported module for working with SQL Server in an Azure environment (https://docs.microsoft.com/en-us/javascript/api/overview/azure/sql?view=azure-node-latest).

MongoDB support comes in via the native mongodb-native module (https://github.com/mongodb/node-mongodb-native), and OO-based support still comes from mongoose (https://github.com/Automattic/mongoose). 

Work with Redis from Node via the redis module (https://github.com/NodeRedis/node_redis). 

