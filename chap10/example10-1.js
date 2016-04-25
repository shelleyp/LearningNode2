var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", 
                                        function(err, db) {
   if(err) { return console.error(err); }

   // access or create widgets collection
   db.collection('widgets', function(err, collection) {
      if (err) return console.error(err);

      // remove all widgets documents
      collection.remove(null,{safe : true}, function(err, result) {
         if (err) return console.error(err);
         console.log('result of remove ' + result.result);

         // create two records
         var widget1 = {title : 'First Great widget',
                         desc : 'greatest widget of all',
                         price : 14.99};
         var widget2 = {title : 'Second Great widget',
                         desc : 'second greatest widget of all',
                         price : 29.99};

         collection.insertOne(widget1, {w:1}, function (err, result) {
            if (err) return console.error(err);
            console.log(result.insertedId);

            collection.insertOne(widget2, {w:1}, function(err, result) {
               if (err) return console.error(err);
               console.log(result.insertedId);

               collection.find({}).toArray(function(err,docs) {
                  console.log('found documents');
                  console.dir(docs);

                  //close database
                  db.close();
               });
            });
        });
     });
   });
});
