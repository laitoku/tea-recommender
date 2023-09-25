const pool = require('../config/db.js')

async function selectAllTea() {
    // var statement = {
    //     text: 'SELECT $1 FROM teas',
    //     values: [param]
    // }
    // console.log(statement)
    
    const res = await pool.query('SELECT * FROM teas');
    await pool.query('SELECT NOW()', (err, res) => {
        console.log(res.rows)
        // pool.end()
    });
    // console.log(res.rows)
    return res.rows;
}

module.exports = {selectAllTea}