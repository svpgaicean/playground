const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	const html = fs.readFileSync(__dirname + "/index.json");
	res.end(html);
})
.listen(5000, "127.0.0.1");
