// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var client = require('./db.js')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/c', function (req, res) {
  res.json({ message: 'Get request worked. /c route' });
});
router.get('/ab', function (req, res) {
  client.query('SELECT NOW()', (err, res) => {
    console.log(res.rows)
    // client.end()
  });
  text = `CREATE TABLE [IF NOT EXISTS] accounts (
    user_id serial PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
          last_login TIMESTAMP 
  );`
  add = `INSERT INTO accounts (username, password, email, created_on)
    VALUES('James', '12345', 'james@example.com', '2016-06-22 19:10:25-07');`
  // client.query(text);
  client.query(add);
  client.query('SELECT * FROM accounts', (err, res) => {
    console.log(res.rows)
    client.end()
  });
  res.json({ message: 'This is the /ab route.' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);