const request = (ms = 2000) => {
	return new Promise (resolve =>
		setTimeout(() => {
			resolve(`Request took ${ms}`) 
	}, ms)
	);
}

request()
	.then(message => console.log(message));

console.log('Hi!');
console.log('Start the request');
