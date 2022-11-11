import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'active' : '')}
						to='/'
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'active' : '')}
						to='/dashboard'
					>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'active' : '')}
						to='/users'
					>
						Users
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
