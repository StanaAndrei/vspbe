require('dotenv').config();
const express = require('express');
const { configRoutes } = require('./router');
const app = express();
const PORT = process.env.PORT || 5000;
const { conn } = require('./conn');

app.listen(PORT, () => {
    console.warn(`Listening on port ${PORT}!`);
    conn.run('CREATE TABLE IF NOT EXISTS Searches(id INTEGER PRIMARY KEY, word TEXT NOT NULL UNIQUE);');
    configRoutes(app);
    //conn.run('DROP TABLE Searches');
})