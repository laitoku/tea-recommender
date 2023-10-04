const model = require('../models/index');

const getAllTea = (req, res) => {
  model.selectTea().then((result) => {
    const tea = JSON.stringify(result, null, 4);
    // res.end(tea);
    console.log(tea);
    res.render('index3', { rows: result });
  });
};

const getTea = (req, res) => {
  if (req) {
    const values = req.body;
    let flavors = '';
    let benefits = '';

    if (values.flavors.length > 1) {
      for (let i = 0; i < values.flavors.length; i++) {
        if (i === (values.flavors.length - 1)) {
          flavors += values.flavors[i];
        } else {
          flavors = `${flavors + values.flavors[i]} | `;
        }
      }
      console.log(flavors);
    }

    if (values.benefits.length > 1) {
      for (let i = 0; i < values.benefits.length; i++) {
        if (i === (values.benefits.length - 1)) {
          benefits += values.benefits[i];
        } else {
          benefits = `${benefits + values.benefits[i]} | `;
        }
      }
      console.log(benefits);
    }

    const caffeine = parseInt(values.caffeine_preference, 10);

    const params = [values.flavors, values.benefits, caffeine];

    model.selectTea(params).then((result) => {
      const combinedResult = {};

      // Iterate over the rows and populate the combined result
      result.forEach((row) => {
        const teaId = row.tea_id;

        // Check if the teaId is already present in the combined result
        if (!combinedResult[teaId]) {
          // If not, initialize it with the tea details
          combinedResult[teaId] = {
            tea_name: row.tea_name,
            tea_type: row.tea_type,
            caffeine: row.caffeine,
            flavors: [],
            benefits: [],
          };
        }

        // Add the flavor and benefit to the respective arrays in the combined result
        if (!combinedResult[teaId].flavors.includes(row.flavor)) {
          combinedResult[teaId].flavors.push(row.flavor);
        }
        if (!combinedResult[teaId].benefits.includes(row.benefit)) {
          combinedResult[teaId].benefits.push(row.benefit);
        }
      });

      // Convert the combined result object into an array of values
      // const resultArray = Object.values(combinedResult);
      res.end(JSON.stringify(combinedResult, null, 4));
    });
  }
  // model.selectTea(['Green', 'yes', 'Sweet']).then((result) => {
  //   const tea = JSON.stringify(result, null, 4);
  //   res.end(tea);
  // });
};

module.exports = { getAllTea, getTea };
