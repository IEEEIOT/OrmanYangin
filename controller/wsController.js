const socketio = require('socket.io');
const db_operations = require('../lib/db_operations');

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
};
module.exports.getIO = () => {
    if(!io) {
        throw new Error('Socket.io initiialize edilmedi');
    }
    return io;
}
// module.exports.yayma = (msg) => {
//     io.emit(msg.sensor_id, msg);
// }