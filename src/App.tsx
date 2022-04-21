import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CountProvider } from './Contexts/Count';

function App() {
	return (
		<CountProvider>
			<div />
		</CountProvider>
	);
}

export default App;
