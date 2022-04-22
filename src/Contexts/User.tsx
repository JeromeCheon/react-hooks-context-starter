import { useContext, useState } from 'react';
import { AuthUser, UserContext } from './UserContext';

export const User = () => {
	// const [user, setUser] = useState<AuthUser>({} as AuthUser);
	const userContext = useContext(UserContext);
	const handleLogin = () => {
		if (userContext) {
			userContext.setUser({
				name: 'Jerome',
				email: 'jerome@youuu',
			});
		}
	};
	const handleLogout = () => {
		if (userContext) {
			userContext.setUser(null);
		}
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User name is {userContext?.user?.name}</div>
			<div>Email name is {userContext?.user?.email}</div>
		</div>
	);
};
