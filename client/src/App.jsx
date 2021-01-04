import React from 'react';
import { useSelector } from 'react-redux';
import Room from './components/Room.jsx';
import Title from './components/Title.jsx';

const App = () => {
	const isLoggedIn = useSelector(state => state.isLoggedIn);
	return (
		<React.Fragment>
			<span id='logo'>Reunion</span>
			<Room/>
			<Title/>
		</React.Fragment>
	);
};

export default App;