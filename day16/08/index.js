const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });

	const htmlStream = fs.createReadStream(__dirname + "/index.html",
		{encoding: "utf-8"});

	htmlStream
		.on("data", chunk => console.log(chunk))
		.pipe(res);
})
.listen(5000, "127.0.0.1");
