const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const db = open({
  filename: './config/tea_db.db',
  driver: sqlite3.Database,
});

module.exports = db;
