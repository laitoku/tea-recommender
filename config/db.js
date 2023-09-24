import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tea_db',
  password: 'pass',
  port: 5432,
});

pool.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});


module.exports = pool;