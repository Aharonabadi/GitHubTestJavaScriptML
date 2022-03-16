var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.post('/login/auth', function (req, res) {
  var u = req.body.username;

  // this should be p
  // var u = req.body.password;
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

  // var q = "SELECT * FROM users WHERE name = '" + "user" + "' AND password ='" + "password" + "';";

  // return db.one(q);
  return db.query('SELECT * FROM users WHERE name = $1 AND password = $2;', [
    u,
    p,
  ]);
});
