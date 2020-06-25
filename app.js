const express = require("express");
const app = express();
const router = require('./routers/router');
const body_parser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;

app.use(body_parser.urlencoded({'extended': 'true'}));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(port, () => {
    console.log('Sunucumuz calismaya baslamistir');
});