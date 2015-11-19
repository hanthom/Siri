// var http = require('http');

var messages = ["You shouldnt have come here", "M Sent me", "Why so serious?"];

function randomMessage(n) {
	return Math.floor((Math.random()*n));
}

var http = require('http');

var sayings = require('./siri-sayings');

var server = http.createServer();

var handleRequest = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	
	if (req.method === 'GET') {
		res.statusCode = 200;
		
		// res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		// res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		// res.setHeader('X-XSS-Protection', '1; mode=block'); XSS is cross sight scripting
		// res.setHeader('X-Frame-Options', 'SAMEORIGIN');
		// res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");

		var index = randomMessage(sayings.length);
		var message = sayings[index];
		var objectToSend = {message: message};
		res.end(JSON.stringify(objectToSend));

	} else if (req.method === 'OPTIONS') {
		res.statusCode = 200;
		// res.setHeader('Content-Type', 'application/json');
		// res.setHeader('Access-Control-Allow-Origin', '*');
		// res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		// res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		// res.setHeader('X-XSS-Protection', '1; mode=block');
		// res.setHeader('X-Frame-Options', 'SAMEORIGIN');
		// res.setHeader('Content-Security-Policy', "default-src 'self' devmountain.github.io");
		res.end();
	}

	// res.end(JSON.stringify(objectToSend));

}

server
	.on('request', handleRequest)
	.listen(8887);