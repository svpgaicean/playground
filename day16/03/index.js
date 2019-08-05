const http = require("http");
const server = http.createServer();

server
	.on("close", () => {
		console.log("called from Close callbacks phase");
	})
	.listen(8000);

process.on("SIGINT", () => {
	server.close();
});
