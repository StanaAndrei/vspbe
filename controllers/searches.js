const { conn } = require('../conn');

module.exports.getSearches = async (req, res) => {
    conn.all('SELECT * FROM searches', [], (err, rows) => {
        res.send(rows);
    });
}