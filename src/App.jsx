import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProvider from './context/UserProvider';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/dashboard/*' element={<DashboardPage />}>
						<Route path='indicadores' element={<p>Indicadores</p>} />
						<Route path='metricas' element={<p>Metricas</p>} />
					</Route>
					<Route path='/users' element={<UsersPage />} />
					<Route path='/usuarios' element={<Navigate to='/users' />} />
					<Route path='/user/:id' element={<UserPage />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
