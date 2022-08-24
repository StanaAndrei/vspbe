require('dotenv').config();
const express = require('express');
const { configRoutes } = require('./router');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.warn(`Listening on port ${PORT}!`);
    configRoutes(app);
})