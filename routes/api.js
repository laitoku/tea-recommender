const express = require('express'); 
const router = express.Router();    
const path = require('path');
var pool = require('../config/db.js')

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });
  
router.get('/c', function (req, res) {
    res.json({ message: 'Get request worked. /c route' });
  });

router.get('/select', function (req, res) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(res.rows)
    // pool.end()
  });

  add = `INSERT INTO teas (teaname, teatype, temperature, mood, caffeinated) 
  VALUES
      ('Jasmine', 'Green', 'Hot', 'Relax', TRUE),
      ('English Breakfast', 'Black', 'Hot', 'Relax', TRUE),
      ('Alishan', 'Oolong', 'Hot', 'Relax', TRUE);`

  // pool.query(add);
  pool.query('SELECT * FROM teas', (err, res) => {
    console.log(res.rows)
    // pool.end()
  });
  
  res.json({ message: 'This is the /select route.' });
});


module.exports = router;