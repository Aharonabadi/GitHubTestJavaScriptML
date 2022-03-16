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

  q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";

  // return numbers between 1 and 3
  const random_number = Math.floor(Math.random() * 3 + 1);

  switch (random_number) {
    case 1:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
      break;
    case 2:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
      break;
    case 3:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
    default:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
  }

  //return db.one(q);
  return db.query(q);
});
