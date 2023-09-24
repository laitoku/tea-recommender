const express = require('express'); 
const router = express.Router();    
const path = require('path');

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });
  
router.get('/c', function (req, res) {
    res.json({ message: 'Get request worked. /c route' });
  });


module.exports = router;