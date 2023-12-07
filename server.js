// call the packages we need
const express = require('express');
// call express
const app = express(); // define our app using express

// this will let us get the data from a POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

const port = process.env.PORT || 8080; // set port

app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));


// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Magic happens on port ${port}`);
