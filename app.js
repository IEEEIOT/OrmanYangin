const express = require("express");
const app = express();
const router = require('./routers/router');
const body_parser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.use(body_parser.urlencoded({'extended': 'true'}));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(port, () => {
    console.log('Sunucumuz calismaya baslamistir');
});

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