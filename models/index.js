const dbPromise = require('../config/db');

async function selectTea(values = '') {
  const db = await dbPromise;

  const dt = await db.all('SELECT datetime(\'now\')');
  console.log(dt);

  if (values === '') {
    const rows = await db.all('SELECT * FROM tea');
    return rows;
  }

  const fp = Array(values[0].length).fill('?').join(' OR ');
  const bp = Array(values[1].length).fill('?').join(' OR ');

  const flat = values.flat();

  const query = `SELECT * FROM tea INNER JOIN flavor ON tea_id = tea_idf INNER JOIN health_benefit ON tea_id = tea_idh WHERE flavor IN (${fp}) OR benefit IN (${bp}) OR caffeine = ?`;
  const rows = await db.all(query, flat);

  return rows;
}

module.exports = { selectTea };
