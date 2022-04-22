type InputProps = {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};

	return <input type='text' value={props.value} onChange={handleInputChange} />;
};
