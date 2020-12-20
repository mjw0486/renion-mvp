const express = require('express');
const path = require('path');
const db = require('../db');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', client => {
	let counter = 0;
	setInterval(() => {
		client.emit('hello', ++counter);
	}, 1000);
	console.log('connected to the client');
	client.on('hey', data => {
		console.log('hey', data);
	});
	// client.on('disconnect', () => {

	// });
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
server.listen(port, () => {
	console.log(`Server connected at http://localhost:${port}`);
});
