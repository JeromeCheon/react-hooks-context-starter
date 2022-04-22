import './App.css';
import { Button } from './Components/Button';
import { Container } from './Components/Container';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Input } from './Components/Input';
import { Oscar } from './Components/Oscar';
import { Person } from './Components/Person';
import { Status } from './Components/Status';

function App() {
	return (
		<div className='App'>
			<Person name={{ first: 'me', last: 'mine' }} />
			<Button
				handleClick={(event, id) => {
					console.log('Button clicked', event, id);
				}}
			/>
			<Input
				value=''
				handleChange={(event) => {
					console.log('input change event', event);
				}}
			/>
			<Container style={{ border: '1px solid black', padding: '1rem' }} />
		</div>
	);
}

export default App;
