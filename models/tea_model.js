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

async function selectTeaTest(values = '') {
  const db = await dbPromise;

  const dt = await db.all('SELECT datetime(\'now\')');
  console.log(dt);

  if (values === '') {
    const rows = await db.all('SELECT * FROM tea');
    return rows;
  }

  const flavor = Array(values[0].length).fill('?').join(' OR ');
  const feeling = Array(values[2].length).fill('?').join(' OR ');
  const benefit = Array(values[3].length).fill('?').join(' OR ');

  const flat = values.flat();

  const query = `SELECT * FROM tea 
                  INNER JOIN flavor ON tea_id = tea_idf 
                  INNER JOIN health_benefit ON tea_id = tea_idh 
                  WHERE flavor IN (${flavor}) OR caffeine = ? OR feeling IN (${feeling}) OR benefit IN (${benefit}) OR milk = ?`;
  const rows = await db.all(query, flat);

  return rows;
}

async function selectTopping(values) {
  const db = await dbPromise;

  const dt = await db.all('SELECT datetime(\'now\')');
  console.log(dt);

  const flavor = Array(values[0].length).fill('?').join(' OR ');
  const texture = Array(values[1].length).fill('?').join(' OR ');

  const flat = values.flat();

  const query = `SELECT * FROM topping 
                  WHERE flavor IN (${flavor}) AND texture IN (${texture})`;
  const rows = await db.all(query, flat);

  return rows;
}


module.exports = { selectTea, selectTeaTest, selectTopping };
