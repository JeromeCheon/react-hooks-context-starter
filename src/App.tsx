import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
// import { CountProvider } from './Contexts/Count';
// import CountLabel from './Components/CountLabel';
// import { UpdateButton } from './Components/OperatorButton';

function App() {
	const personName = {
		first: 'Bruce',
		last: 'Wayne',
	};
	return (
		// <CountProvider>
		// 	<CountLabel />
		// 	<UpdateButton op={'+'} />
		// 	<UpdateButton op={'-'} />
		// </CountProvider>
		<div className='App'>
			<Greet name='Jerome' messageCount={10} isLoggedIn={false} />
			<Person name={personName} />
		</div>
	);
}

export default App;
