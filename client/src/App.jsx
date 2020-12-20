import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

const App = () => {
	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Counter {counter}</h1>
			<button onClick={()=> dispatch(increment(2))}>+</button>
			<button onClick={()=> dispatch(decrement(2))}>-</button>

		</div>
	);
};

export default App;
