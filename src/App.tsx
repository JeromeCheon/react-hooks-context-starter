import './App.css';
import { CountProvider } from './Contexts/Count';
import CountLabel from './Components/CountLabel';
import { UpdateButton } from './Components/OperatorButton';

function App() {
	return (
		<CountProvider>
			<CountLabel />
			<UpdateButton op={'+'} />
			<UpdateButton op={'-'} />
		</CountProvider>
	);
}

export default App;
