import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
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
			<Greet name='Jerome' messageCount={10} isLoggedIn={false} />
			<Person name={personName} />
			<PersonList names={nameList} />
		</div>
	);
}

export default App;
