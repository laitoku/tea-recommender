const pool = require('../config/db');

async function selectAllTea() {
  // var statement = {
  //     text: 'SELECT $1 FROM teas',
  //     values: [param]
  // }
  // console.log(statement)

  const result = await pool.query('SELECT * FROM tea');
  await pool.query('SELECT NOW()', (err, res) => {
    console.log(res.rows);
    // pool.end()
  });
  // console.log(res.rows)
  return result.rows;
}

module.exports = { selectAllTea };
