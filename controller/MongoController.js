const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:158183@ieeeiot.ebk0k.mongodb.net/ieeeiot?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{ console.log("mongo baglantisi kuruldu.");})
.catch((err)=>{console.log("mongo baglanti hatasi");});
