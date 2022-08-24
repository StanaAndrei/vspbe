var giphy = require('giphy-api')(process.env.GIPHY_KEY);

module.exports.getGiphs = async (req, res) => {
    const ans = await giphy.search(req.query.keyWord);
    res.status(200).send(ans.data.map(data => data.embed_url + '\n').toString());
}