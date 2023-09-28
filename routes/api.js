const express = require('express');

const router = express.Router();
const control = require('../controllers/index');

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/c', (req, res) => {
  res.json({ message: 'Get request worked. /c route' });
});

router.route('/select')
  .get(control.getAllTea);
router.route('/sel')
  .get(control.getTea);
// function (req, res) {
//   // pool.query('SELECT NOW()', (err, res) => {
//   //   console.log(res.rows)
//   //   // pool.end()
//   // });

//   add = `INSERT INTO teas (teaname, teatype, temperature, mood, caffeinated)
//   VALUES
//       ('Jasmine', 'Green', 'Hot', 'Relax', TRUE),
//       ('English Breakfast', 'Black', 'Hot', 'Relax', TRUE),
//       ('Alishan', 'Oolong', 'Hot', 'Relax', TRUE);`

//   // pool.query(add);
//   // var result = pool.query('SELECT * FROM teas', (err, res) => {
//   //   // console.log(res.rows)
//   //   var result = JSON.stringify(res.rows);
//   //   // pool.end()
//   // });
//   model.selectAllTea().then((result) => {
//     // console.log(result);
//     var tea = JSON.stringify(result, null, 4)
//     // var tea = tea.replace(/\n/g, '\n')
//     // console.log(tea)
//     res.end(tea)
//   });
//   // res.json({ message: 'This is the /select route.' });
// });

module.exports = router;
