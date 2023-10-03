// const pool = require('../config/db');
const dbPromise = require('../config/db');

async function selectTea(values = '') {
  const db = await dbPromise;

  const dt = await db.all(`SELECT datetime('now')`);
  console.log(dt);
  
  if (values == '')
  {
    const rows = await db.all(`SELECT * FROM tea`);
    return rows;
  }
  else
  {
    const rows = await db.all(`SELECT * FROM tea INNER JOIN flavor ON tea_id = tea_idf WHERE tea_type = ? AND caffeine = ? AND flavor = ?`, values);
    return rows;
  }
};

module.exports = { selectTea };
