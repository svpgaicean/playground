const crypto = require("crypto");
const initialDate = Date.now();
const iterations = 6;

for (let i = 0; i < iterations; i++) {
	crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derived) => {
		if (err) throw err;
		// console.log(derived.toString("hex")); // '3745e48...08d59ae
		console.log(`${Date.now() - initialDate} ms`); // '254 ms'
	});
}
