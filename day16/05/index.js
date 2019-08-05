const http = require("http");

const doWork = (duration) => {
	const start = Date.now();
	while (Date.now() - start < duration) {}
}

http.createServer((req, res) => {
	doWork(5000);
	res.writeHead(200);
	res.end("Hello World");
})
.listen(5000, "127.0.0.1");
