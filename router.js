const giphyRouter = require('./routes/giphy');

module.exports.configRoutes = app => {
    app.use(giphyRouter);
}