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
  //return db.query( q, arr);
  return db.query(q, arr);
}

router.post('/login/auth', function (req, res) {
  const u = req.body.username;
  const p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  const q = `SELECT * FROM users WHERE name = ${u} + AND password = ${p};`;
  let arr = [];
  return run1(db, q, arr);
});
