const express = require('express');
const path = require('path');
const db = require('../db');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

io.on('connection', client => {
	let counter = 0;
	setInterval(() => {
		client.emit('hello', ++counter);
	}, 1000);
	console.log('connected to the client');
	client.on('hey', data => {
		console.log('hey', data);
	});
	client.on('join-room', (roomId, userId) => {
		client.join(roomId);
		client.to(roomId).broadcast.emit('user-connected', userId);
	})
	client.on('disconnect', () => {
		client.to(roomId).broadcast.emit('user-disconnected', userId);
	});
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
	res.render('room', { roomId: req.params.room })
})

const port = 3000;
server.listen(port, () => {
	console.log(`Server connected at http://localhost:${port}`);
});
