/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const zeromq = require("zeromq");

//Socket Type
const socket = zeromq.socket("push");

//runner

const runPublisher = async () => {
    return new Promise((resolve, reject) => {
        socket.bind("tcp://127.0.0.1:9000");
        resolve("Publisher is ready to send message ... ");
    })

}

//sender

const sendJob = async () => {
    return new Promise((resolve, reject) => {
        socket.send("This message sent by wmw-cine-hub publisher.");
        resolve("message sent");
    })
}

runPublisher().then((data) => {
    console.log(data)
    sendJob().then((data) => {
        console.log(data)
    })
})


exports.sendJob = sendJob;
exports.runPublisher = runPublisher;
