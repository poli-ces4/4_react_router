import { Link, Outlet } from 'react-router-dom';

const DashboardPage = () => {
	return (
		<div>
			<h1>DashboardPage</h1>
			<br />
			<Link to='indicadores'>Indicadores</Link>
			<br />
			<Link to='metricas'>Metricas</Link>
			<br />
			<p>Resultados de </p>
			<br />
			<Outlet />
		</div>
	);
};

export default DashboardPage;
