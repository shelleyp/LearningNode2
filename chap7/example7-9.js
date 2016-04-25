var mysql = require('mysql'),
    crypto = require('crypto');

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'username',
   password: 'userpass'
  });

connection.connect();

connection.query('USE nodedatabase');

var username = process.argv[2];
var password = process.argv[3];

var salt = Math.round((Date.now() * Math.random())) + '';

var hashpassword = crypto.createHash('sha512')
                   .update(salt + password, 'utf8')
                   .digest('hex');
// create user record
connection.query('INSERT INTO user ' +
   'SET username = ?, passwordhash = ?, salt = ?
   [username, hashpassword, salt], function(err, result) {
      if (err) console.error(err);
      connection.end();
});
