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


runProducer();
async function runProducer() {
    await socket.bind("tcp://127.0.0.1:9000");
    console.log("Producer is ready to send message hit Enter ...");

    process.stdin.once("data", async () => {
        for (let i = 0; i <= 10000; i++) {
            await socket.send(
                "This message sent by producer... (#" + i + ")"
            );

            // 200 ms stop..
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    });
}
