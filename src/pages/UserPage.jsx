import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);
	const handleClick = () => {
		navigate('/', { replace: true });
	};
	const handleLogin = () => {
		setUser({ id: 10, name: 'Juan Lopez' });
	};
	return (
		<div>
			<h2>User Id {params.id}</h2>
			<br />
			user name: {user.name}
			<br />
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleClick}>Regresar</button>
		</div>
	);
};

export default UserPage;
