import LandingPage from '../components/landingPage/landing.jsx';
import AuthPage from '../components/authPage/index.jsx';
import DashBoard from '../components/dashboard/index.jsx';

export default [
  {
    path: '/',
    exact: true,
    component: LandingPage,
  },
  {
    path: '/auth/:id',
    exact: true,
    component: AuthPage,
  },
  {
    path: '/auth',
    exact: true,
    component: AuthPage,
  },
  {
    path: '/dashboard/:id',
    exact: true,
    component: DashBoard,
    type: 'private',
  },
  {
    path: '/dashboard/:id/:id2',
    exact: true,
    component: DashBoard,
    type: 'private',
  },
  {
    path: '/dashboard',
    exact: true,
    component: DashBoard,
    type: 'private',
  },
];
