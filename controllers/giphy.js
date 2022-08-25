var giphy = require('giphy-api')(process.env.GIPHY_KEY);
const { conn } = require('../conn');

module.exports.getGiphs = async (req, res) => {
    const { keyWord, limit } = req.query;
    if (!keyWord) {
        console.log('err');
        return res.send('ERROR!');
    }
    try {
        conn.run('INSERT INTO Searches(word) VALUES(?);', [keyWord], err => {
            if (err) console.error(err);
        });
    } catch (e) {}
    const ans = await giphy.search({
        q: keyWord,
        limit: limit
    });
    res.status(200).send(ans.data.map(data => data.embed_url + '\n').toString());
}