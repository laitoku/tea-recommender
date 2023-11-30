const express = require('express');

const router = express.Router();
const control = require('../controllers/tea_controller');

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/c', (req, res) => {
  res.json({ message: 'Get request worked. /c route' });
});

router.route('/select')
  .post(control.getTea);
router.route('/sel')
  .get(control.getTea);

module.exports = router;
