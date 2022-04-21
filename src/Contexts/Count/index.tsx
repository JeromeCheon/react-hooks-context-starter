// 전역 데이터 저장을 위한 context 생성 파일
import { createContext, useState } from 'react';

const CountContext = createContext({
	count: 0,
	updateCount: (op: string): any => {}, // Context도 react 컴포넌트이므로, state를 사용해서 데이터 다뤄야
});

interface Props {
	children: JSX.Element | JSX.Element[];
}

const CountProvider = ({ children }: Props): JSX.Element => {
	const [count, setCount] = useState(0);
	const updateCount = (op: string): void => {
		op === '+' ? setCount(count + 1) : setCount(count - 1);
	};
	return (
		<CountContext.Provider value={{ count, updateCount }}>
			{children}
		</CountContext.Provider>
	);
};

export { CountContext, CountProvider };
