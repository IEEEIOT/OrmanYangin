const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com', options);

const topicgelenler = "gelenler/sensor1";
var options = {
    clientId: "nodejslistener",
    port: 1883,
    clean: true
};
console.log(options);
console.log("buraya gelir");
let mes;
client.on('connect', () => {

    console.log("ok");
    console.log("connected flag " + client.connected);
    if (!client.connected) {
        client.on("error", (error) => {
            console.log("Can't connect" + error);
        })
    }
    client.subscribe(topicgelenler, { qos: 0 });

    client.on('message', (topicgelenler, message, packet) => {
        console.log(JSON.parse(message));
        mes = JSON.parse(message);
    });
});



module.exports.getData = (req, res) => {
    res.json(mes);
};