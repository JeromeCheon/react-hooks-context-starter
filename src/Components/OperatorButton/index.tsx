import { useContext } from 'react';
import { CountContext } from '../../Contexts/Count';

interface Props {
	op: string;
}

export const UpdateButton = (props: Props) => {
	const { updateCount } = useContext(CountContext);
	return <button onClick={() => updateCount(props.op)}>{props.op}1</button>;
};
