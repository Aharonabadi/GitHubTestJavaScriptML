var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  var db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  let vul =
    "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";

  let safe = 'SELECT * FROM users WHERE name = $1 AND password = $2;';

  var qList = [vul, 'stuff', 'other', safe];

  qList = qList.filter((i) => i === safe);

  let q = qList[0];

  return db.query(q);
});
