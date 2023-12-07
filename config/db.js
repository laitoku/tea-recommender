const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

// connect to database
const db = open({
  filename: './config/tea_db.db',
  driver: sqlite3.Database,
});

module.exports = db;
