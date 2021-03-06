const express = require("express");
const app = express();
const router = require('./routers/router');
const body_parser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const io = require('./controller/wsController');
const jwt = require('jsonwebtoken');

app.use(body_parser.urlencoded({'extended': 'true'}));
app.use(body_parser.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.set("api_secret_key", require("./lib/api_secret_key").api_secret_key);

const server = app.listen(port, () => {
    console.log('Sunucumuz calismaya baslamistir');
});

io.listen(server);
mongoose.connect('mongodb+srv://admin:158183@ieeeiot.ebk0k.mongodb.net/ieeeiot?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("mongo baglantisi kuruldu.");
    })
    .catch((err)=>{
        console.log("mongo baglanti hatasi");
    });
