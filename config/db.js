const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tea_db',
  password: 'pass',
  port: 5432,
});

pool.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = pool;
