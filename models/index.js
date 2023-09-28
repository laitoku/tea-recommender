const pool = require('../config/db');

async function selectTea(values = '') {
  await pool.query('SELECT NOW()', (err, res) => {
    console.log(res.rows);
  });

  if (values == '')
  {
    var result = await pool.query('SELECT * FROM tea');
    return result.rows;
  }
  else
  {
    const text = `SELECT * 
                  FROM tea 
                  INNER JOIN flavor ON tea_id = tea_idf 
                  WHERE tea_type = $1 AND caffeinated = $2 AND flavor = $3`
    
    var result = await pool.query(text, values);
    return result.rows;
  }
  
}

module.exports = { selectTea };
