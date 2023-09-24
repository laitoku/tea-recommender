const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tea_db',
  password: 'pass',
  port: 5432,
});

pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// client.query(`DROP DATABASE IF EXISTS tea_db;`);
// client.query(`CREATE DATABASE tea_db;`);
// client.end();

// client.query(`SELECT 'CREATE DATABASE tea_db' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'tea_db')`, (err, res) => {
//   client.end();
// });


// client.connect().then(() => {
//   client.query('SELECT NOW()', (err, res) => {
//     console.log(res.rows)
//     client.end()
//   });
// });

module.exports = pool;