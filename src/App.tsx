import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CountProvider } from './Contexts/Count';
import CountLabel from './Components/CountLabel';

function App() {
	return (
		<CountProvider>
			<CountLabel />
		</CountProvider>
	);
}

export default App;
