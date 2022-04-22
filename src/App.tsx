import './App.css';
import { Button } from './Components/Button';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Status } from './Components/Status';
// import { CountProvider } from './Contexts/Count';
// import CountLabel from './Components/CountLabel';
// import { UpdateButton } from './Components/OperatorButton';

function App() {
	const personName = {
		first: 'Bruce',
		last: 'Wayne',
	};

	const nameList = [
		{
			first: 'Bruce',
			last: 'Wayne',
		},
		{
			first: 'Clark',
			last: 'Kent',
		},
		{
			first: 'Princess',
			last: 'Diana',
		},
	];

	return (
		// <CountProvider>
		// 	<CountLabel />
		// 	<UpdateButton op={'+'} />
		// 	<UpdateButton op={'-'} />
		// </CountProvider>
		<div className='App'>
			<Button
				handleClick={(event) => {
					console.log('Button clicked', event);
				}}
			/>
		</div>
	);
}

export default App;
