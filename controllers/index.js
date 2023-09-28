const model = require('../models/index');

const getAllTea = (req, res) => {
  model.selectTea().then((result) => {
    // console.log(result);
    const tea = JSON.stringify(result, null, 4);
    // var tea = tea.replace(/\n/g, '\n')
    // console.log(tea)
    res.end(tea);
  });
};

const getTea = (req, res) => {
  model.selectTea(['Green', 'yes', 'Sweet']).then((result) => {
    // console.log(result);
    const tea = JSON.stringify(result, null, 4);
    // var tea = tea.replace(/\n/g, '\n')
    // console.log(tea)
    res.end(tea);
  });
};

module.exports = { getAllTea, getTea };
