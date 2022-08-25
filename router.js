const giphyRouter = require('./routes/giphy');
const searchesRouter = require('./routes/searches');

module.exports.configRoutes = app => {
    app.use(giphyRouter);
    app.use(searchesRouter);
}