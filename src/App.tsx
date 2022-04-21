import "./App.css";
import { Greet } from "./Components/Greet";
// import { CountProvider } from './Contexts/Count';
// import CountLabel from './Components/CountLabel';
// import { UpdateButton } from './Components/OperatorButton';

function App() {
  return (
    // <CountProvider>
    // 	<CountLabel />
    // 	<UpdateButton op={'+'} />
    // 	<UpdateButton op={'-'} />
    // </CountProvider>
    <div className='App'>
      <Greet name='Jerome' />
    </div>
  );
}

export default App;
