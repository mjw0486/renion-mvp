const express = require('express');
const path = require('path');
const db = require('../db');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');
const ejs = require('ejs');
var cors = require('cors');
var history = require('connect-history-api-fallback');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.set('view engine', 'ejs')

io.on('connection', client => {
	client.on('join-room', (roomId, userId) => {
		client.join(roomId);
		console.log('user is in room: ', roomId, userId);
		client.to(roomId).broadcast.emit('user-connected', userId);
		client.on('disconnect', () => {
			client.to(roomId).broadcast.emit('user-disconnected', userId);
		});
	})

});

app.get('/:room', (req, res) => {
	console.log('params.room: ', req.params.room)
	res.render('room', { roomId: req.params.room })
})


const port = 3002;
server.listen(port, () => {
	console.log(`Server connected at http://localhost:${port}`);
});
