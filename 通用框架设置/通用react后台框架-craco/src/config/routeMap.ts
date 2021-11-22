import { Login, Subscription } from 'pages/index';

export interface routeProps {
  path: string;
  name?: string;
  noExtra?: boolean;
  component: React.LazyExoticComponent<any>;
  perm?: string;
}

export const globalRoutes: routeProps[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const routes: routeProps[] = [
  {
    name: '订阅',
    path: '/subscription',
    component: Subscription,
  },
];

export default routes;
