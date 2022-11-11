import { Link } from 'react-router-dom';

const UsersPage = () => {
	return (
		<div>
			<h1>Users</h1>
			<ul>
				<li>
					<Link to='/user/10'>User 10</Link>
				</li>
				<li>
					<Link to='/user/20'>User 20</Link>
				</li>
			</ul>
		</div>
	);
};

export default UsersPage;
