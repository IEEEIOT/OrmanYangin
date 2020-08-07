const msg = require('./mqttDataController');
var socketio = require('socket.io');

module.exports.listen = function(app){
    io = socketio.listen(app);
    io.on('connection', (socket) => {
        console.log('yeni baglanti');
        socket.on('send message', (data) => {
            console.log('yeni mesaj' + data);
        })
        socket.on('disconnect', () => {
            console.log('user disconnected' + socket.id);
        })
    });
    
    setInterval(() => {
        io.emit('sensor_a1', msg);
    }, 5000);
}