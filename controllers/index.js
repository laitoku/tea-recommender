const model = require('../models/index.js');

const getAllTea = (req, res) => {
    model.selectAllTea().then((result) => {
        // console.log(result);
        var tea = JSON.stringify(result, null, 4)
        // var tea = tea.replace(/\n/g, '\n')
        // console.log(tea)
        res.end(tea)
      });
}

module.exports = {getAllTea}