const express = require('express');

const router = express.Router();
const control = require('../controllers/tea_controller');

router.route('/select')
  .post(control.getTea);


module.exports = router;
