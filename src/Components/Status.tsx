type StatusProps = {
	// 이렇게 3가지 값만 specify하고 싶다면
	// 다음 string에 대한 union type을 만들어줌
	status: 'loading' | 'success' | 'error';
};

export const Status = (props: StatusProps) => {
	let message;
	if (props.status === 'loading') {
		message = 'Loading';
	} else if (props.status === 'success') {
		message = 'Data fetched successfully';
	} else if (props.status === 'error') {
		message = 'Error fetching data';
	}
	return (
		<div>
			<h2>Status: {message}</h2>
		</div>
	);
};
