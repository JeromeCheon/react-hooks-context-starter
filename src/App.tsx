import './App.css';
import { DomRef } from './Components/ref/DomRef';
import { MutableRef } from './Components/ref/MutableRef';
import { Box } from './Contexts/Box';
import { ThemeContextProvider } from './Contexts/ThemeContext';
import { User } from './Contexts/User';
import { UserContextProvider } from './Contexts/UserContext';

function App() {
	return (
		<div className='App'>
			<DomRef />
			<MutableRef />
		</div>
	);
}

export default App;
