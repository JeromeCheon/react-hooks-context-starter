import './App.css';
import { Box } from './Contexts/Box';
import { ThemeContextProvider } from './Contexts/ThemeContext';
import { User } from './Contexts/User';
import { UserContextProvider } from './Contexts/UserContext';

function App() {
	return (
		<div className='App'>
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<UserContextProvider>
				<User />
			</UserContextProvider>
		</div>
	);
}

export default App;
