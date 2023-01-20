const express = require('express');
const config = require('./config');
const app = express();

app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(config.PORT, () => console.log(`Server is runinig on port ${config.PORT} ......np`));