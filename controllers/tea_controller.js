const model = require('../models/tea_model');

const getTea = (req, res) => {
  if (req) {
    bd = req.body

    // Ensure all questions were answered
    if (!bd.flavors || !bd.caffeine_preference || !bd.feelings || !bd.benefits || !bd.milk_preference) {
      res.render('error');
      return;
    }

    const caffeine = parseInt(bd.caffeine_preference, 10);
    const milk = parseInt(bd.milk_preference, 10);

    if (milk != 0) {
      if (!bd.toppings_preference) {
        res.render('error');
        return;
      }
      var topping = parseInt(bd.toppings_preference, 10);
    }
    else {
      var topping = 0
    }

    const params = [bd.flavors, caffeine, bd.feelings, bd.benefits, milk];

    model.selectTea(params).then((result) => {
      if (topping != 0) { // Display teas and toppings
        if (!bd.textures) {
          res.render('error');
          return;
        }
        let paramT = [bd.flavors, bd.textures]
        model.selectTopping(paramT).then((tops) => {
          if (result.length > 0) {
            res.render('displayrectop', { rows: result, toppings: tops });
          }
          else {
            res.render('norec')
          }
        })
      }
      else { // Display teas only
        if (result.length > 0) {
          res.render('displayrec', { rows: result });
        }
        else {
          res.render('norec');
        }
      }
    });
  }
};

module.exports = { getTea };
