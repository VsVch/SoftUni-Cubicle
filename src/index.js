const express = require('express');
const hadlebars = require('express-handlebars');

const config = require('./config');
const app = express();
app.engine('hbs', hadlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

app.listen(config.PORT, () => console.log(`Server is runinig on port ${config.PORT} ......np`));