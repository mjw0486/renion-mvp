import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';
import { io } from 'socket.io-client';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const $events = document.getElementById('events');
		const newItem = (content) => {
			const item = document.createElement('li');
			item.innerText = content;
			return item;
		};
		const socket = io('http://localhost:3000');
		socket.on('connect', () => {
			$events.appendChild(newItem('connected to the server'));
		});
		socket.on('hello', (counter) => {
			dispatch(increment(2))
			$events.appendChild(newItem(`hello - ${counter}`));
		});
		let counter = 0;
		setInterval(() => {
			++counter;
			socket.emit('hey', { counter });
		}, 1000);
	}, []);

	const counter = useSelector(state => state.counter);
	return (
		<div>
			<h1>Counter {counter}</h1>
			<button onClick={()=> dispatch(increment(2))}>+</button>
			<button onClick={()=> dispatch(decrement(2))}>-</button>
		</div>
	);
};

export default App;