const express = require('express');

const theUsers = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Johnny" },
	{ id: 3, name: "Ben" },
	{ id: 4, name: "Rachel" },
	{ id: 5, name: "Doe" },
	{ id: 6, name: "Danny" },
	{ id: 7, name: "Monica" },
	{ id: 8, name: "Chandler" },
	{ id: 9, name: "Joey" },
	{ id: 10, name: "Phoebe" },
	{ id: 11, name: "Dragos" },
	{ id: 12, name: "Andrei" },
	{ id: 13, name: "Patrik" },
	{ id: 14, name: "Andra" },
	{ id: 15, name: "Magda" },
	{ id: 16, name: "Bob" },
	{ id: 17, name: "JohnCena" },
]

const router = express.Router();
router.get('/users/', (req, res) => {
	res.status(200).json({theUsers});
});
module.exports = router;

// router.get('/users/:id', validationMiddleware, (req, res) => {
// 	res.status(200).json({name: 'Ted', email: 'ted@example.com'});
// })
