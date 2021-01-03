import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';
import { io } from 'socket.io-client';
import Login from './components/Login.jsx';
import CreateRoom from './components/CreateRoom.jsx';
import InviteUsers from './components/InviteUsers.jsx';
import Room from './components/Room.jsx';
import FloorPlan from './components/FloorPlan.jsx';
import VideoGrid from './components/VideoGrid.jsx';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Avatars from './components/Avatars.jsx';
import Title from './components/Title.jsx';
import LoginScreen from './components/LoginScreen.jsx';

const App = () => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const $events = document.getElementById('events');
	// 	const newItem = (content) => {
	// 		const item = document.createElement('li');
	// 		item.innerText = content;
	// 		return item;
	// 	};
	// 	const socket = io('http://localhost:3000');
	// 	socket.on('connect', () => {
	// 		$events.appendChild(newItem('connected to the server'));
	// 	});
	// 	socket.on('hello', (counter) => {
	// 		dispatch(increment(2))
	// 		$events.appendChild(newItem(`hello - ${counter}`));
	// 	});
	// 	let counter = 0;
	// 	setInterval(() => {
	// 		++counter;
	// 		socket.emit('hey', { counter });
	// 	}, 1000);
	// }, []);

	// const counter = useSelector(state => state.counter);
	const isLoggedIn = useSelector(state => state.isLoggedIn);
	const avatars = useSelector(state => state.avatars);
	return (
		<React.Fragment>
			{isLoggedIn ? <React.Fragment><FloorPlan/> <Avatars /> <VideoGrid /> <Title /> </React.Fragment>:
			<LoginScreen/>}
		</React.Fragment>
	);
};

export default App;