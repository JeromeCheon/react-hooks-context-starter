import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CountProvider } from './Contexts/Count';
import CountLabel from './Components/CountLabel';
import { PlusButton } from './Components/PlusButton';

function App() {
	return (
		<CountProvider>
			<CountLabel />
			<PlusButton />
		</CountProvider>
	);
}

export default App;
