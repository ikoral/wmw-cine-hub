/* eslint-disable prettier/prettier */
const zeromq = require("zeromq");

//Socket Type
const socket = zeromq.socket("pull");

//runner
runWorker()

async function runWorker() {

    await socket.connect("tcp://127.0.0.1:9000");
    console.log("Connected to publisher ... ");

    socket.on("message", function (msg) {
        console.log("work: %s", msg.toString());
    })
}
