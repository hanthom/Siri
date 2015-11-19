// var http = require('http');

var messages = ["You shouldnt have come here", "M Sent me", "Why so serious?"];

function randomMessage(n) {
	return Math.floor((Math.random()*n));
}

// http.createServer(function(req, res) {
// 	res.setHeader('Content-Type', 'application/json');
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.statusCode = 200;
// 	res.end(JSON.stringify({message: messages[myMessage()]}));


// }).listen(8887, function() {
// 	console.log('Listening on port:', 8887);
// });

var http = require('http');

var sayings = require('./siri-sayings');

var server = http.createServer();

var handleRequest = function(req, res) {
	var index = randomMessage(sayings.length);
	var message = sayings[index];
	var objectToSend = {message: message};
	res.end(JSON.stringify(objectToSend));

}

Server
	.on('request', handleRequest);
	.listen(8887);