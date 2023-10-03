const model = require('../models/index');

const getAllTea = (req, res) => {
  model.selectTea().then((result) => {
    const tea = JSON.stringify(result, null, 4);
    // res.end(tea);
    res.render('index3', { rows: result });
  });
};

const getTea = (req, res) => {
  model.selectTea(['Green', 'yes', 'Sweet']).then((result) => {
    const tea = JSON.stringify(result, null, 4);
    res.end(tea);
  });
};

module.exports = { getAllTea, getTea };
