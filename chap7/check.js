var mysql = require('mysql'),
    crypto = require('crypto');

var connection = mysql.createConnection({
   user: 'username',
   password: 'userpass'
  });

connection.query('USE nodedatabase');

var username = process.argv[2];
var password = process.argv[3];

connection.query('SELECT password, salt FROM user WHERE username = ?',
   [username], function(err, result, fields) {
   if (err) return console.error(err);

   var newhash = crypto.createHash('sha512')
                 .update(result[0].salt + password, 'utf8')
                 .digest('hex');

   if (result[0].password === newhash) {
      console.log("OK, you're cool");
   } else {
      console.log("Your password is wrong. Try again.");
   }
   connection.end();
});
