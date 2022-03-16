var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  var db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  var q = '';
  var arr = [];

  // return numbers between 1 and 3
  const random_number = Math.floor(Math.random() * 3 + 1);

  switch (random_number) {
    case 1:
      q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
      arr = [u, p];
      break;
    case 2:
      q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
      arr = [u, p];
      break;
    case 3:
      q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
      arr = [u, p];
    default:
      q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
      arr = [u, p];
  }

  return db.query(q, arr);
});
