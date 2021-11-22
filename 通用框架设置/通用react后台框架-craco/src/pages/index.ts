import { lazy } from 'react';

const Login = lazy(() => import('./login'));
const Subscription = lazy(() => import('./subscription'));

export {
  Login,
  Subscription
};
