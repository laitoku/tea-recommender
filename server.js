// call the packages we need
const express = require('express');
// call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const path = require('path');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
// var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'));
// });

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Magic happens on port ${port}`);
