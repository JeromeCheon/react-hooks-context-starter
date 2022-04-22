import './App.css';
import { Heading } from './Components/Heading';
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
			<Status status='success' />
			<Heading>Placeholder text</Heading>
		</div>
	);
}

export default App;
