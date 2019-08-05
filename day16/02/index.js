const fs = require("fs");
const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter
	.on("phase", () => console.log("Poll phase"))
	.emit("phase");

fs.readFile(__filename, () => {
	setTimeout(() => console.log("Timers phase"), 2000);
	setTimeout(() => console.log("timerrrrssss"), 1000);
	setImmediate(() => console.log("bamboozle the check phase order"));
	setImmediate(() => console.log("Check phase"));
})
