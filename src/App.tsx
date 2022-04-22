import './App.css';
import { Button } from './Components/Button';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Input } from './Components/Input';
import { Oscar } from './Components/Oscar';
import { Status } from './Components/Status';

function App() {
	return (
		<div className='App'>
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
		</div>
	);
}

export default App;
