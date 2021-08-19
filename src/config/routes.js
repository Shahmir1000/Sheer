// import { Route } from '@types/react-router-dom'
import Main from '../screens/Main/Main';
import Pricing from '../screens/Pricing/Pricing';
const routes = [
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    exact: false,
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    exact: false,
  },
]

export default routes
