const hadlebars = require('express-handlebars');

function setupViewEngine() {
    app.engine('hbs', hadlebars.engine({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}

