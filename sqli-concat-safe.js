var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var db = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db',
});

db.connect();

function run1(db, q, arr) {
  return run2(db, q, arr);
}

function run2(db, q, arr) {
  return run3(db, q, arr);
}

function run3(db, q, arr) {
  return run4(db, q, arr);
}

function run4(db, q, arr) {
  return run5(db, q, arr);
}

function run5(db, q, arr) {
  return run6(db, q, arr);
}

function run6(db, q, arr) {
  // return db.query(db, q, arr);
  return db.query(q, arr);
}

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  var q = "SELECT * FROM users WHERE name = '$1' AND password ='$2';";
  var arr = [u, p];
  return run1(db, q, arr);
});
