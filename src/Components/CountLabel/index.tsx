import { useContext } from 'react';
import { CountContext } from '../../Contexts/Count';

const CountLabel = () => {
	const { count } = useContext(CountContext);
	return <div>{count}</div>;
};

export default CountLabel;
