import './App.css';
import { Button } from './Components/Button';
import { Container } from './Components/Container';
import { Input } from './Components/Input';
import { Person } from './Components/Person';
import { Counter } from './Components/state/Counter';
import { User } from './Components/state/User';

function App() {
	return (
		<div className='App'>
			<Counter />
		</div>
	);
}

export default App;
