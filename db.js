const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'pass',
  port: 5432,
});

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// client.connect().then(() => {
//   client.query('SELECT NOW()', (err, res) => {
//     console.log(res.rows)
//     client.end()
//   });
// });

module.exports = client;