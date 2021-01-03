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
const mailGunAPI = require('../mailgun.js');
const mailgun = require('mailgun-js');
var history = require('connect-history-api-fallback');
// const ROOM_ID = uuidV4();


app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: 'http://localhost:3000'
}));
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
// app.use(history({
// 	verbose: true,
// 	index: `/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/MVP/reunion/views/room.ejs`,
// 	rewrites: [
//     { from: /\/bundle.js/, to: `/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/MVP/reunion/views/room.ejs`}
//   ]
// }));

io.on('connection', client => {
	client.on('join-room', (roomId, userId) => {
		client.join(roomId);
		console.log('user is in room: ', roomId, userId);
		client.to(roomId).broadcast.emit('user-connected', userId);
		client.on('disconnect', () => {
			client.to(roomId).broadcast.emit('user-disconnected', userId);
		});
	})
	client.on('edit-avatars', (newAvatar, oldAvatars, roomId) => {
		const newAvatars = [];
		for (const avatar of oldAvatars) {
			if (avatar.userId !== newAvatar.userId) {
				newAvatars.push(avatar);
			}
		}
		newAvatars.push(newAvatar);
		client.to(roomId).broadcast.emit('update-avatars', newAvatars);
	})
	// client.on('in-proximity', (roomId, userId) => {
	// 	console.log('roomId: ', roomId, ' userId: ', userId);
	// 	client.to(roomId).broadcast.emit('user-in-proximity', userId);
	// });
});

// app.get('/', (req, res) => {
// 	console.log('getting /')
// 	res.redirect(`/${uuidV4()}`)
// })
// app.get('/', (req, res) => {
// 	res.redirect(`/login/${uuidV4()}`)
// })

app.get('/:room', (req, res) => {
	console.log('params.room: ', req.params.room)
	res.render('room', { roomId: req.params.room })
})

// app.get('/room/:id', function (req, res) {
//   // and drop 'public' in the middle of here
//   res.sendFile(path.join('/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/MVP/reunion/public', 'index.html'))
// })

// app.get('/*', function (req, res) {
//   res.sendFile(path.join('/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/MVP/reunion/public/', 'index.html'));
// });



app.post('/:room/emailInvites', (req, res) => {
// 	console.log('???');
// 	console.log('emailInvites!!');
// 	const DOMAIN = 'sandbox27644a7e530b40b8bb9c2e782ee8fd58.mailgun.org'
// 	const mg = mailgun({apiKey: mailGunAPI, domain: DOMAIN});
// 	console.log('req.body: ', req.body);
// 	const inviteList = Object.values(req.body.inviteList);
// 	const url = req.body.url
	// const ROOM_ID = uuidV4();
// 	// console.log('mailgun');

//   const data = {
//     from: 'mjw0486@gmail.com',
//     to: `${inviteList.map((invite, index) => {return invite;})}`,
//     subject: 'Hello',
// 		text: 'Add link here',
// 		html: `<a href="${url + ROOM_ID}">My Site</a>`
// 	};
// 	console.log('data: ', data);

//   mg.messages().send(data, function (error, body) {
// 		console.log('body: ', body);
// 		console.log('error: ', error);
// 	});
	// res.send(ROOM_ID);
})

const port = 3002;
server.listen(port, () => {
	console.log(`Server connected at http://localhost:${port}`);
});
