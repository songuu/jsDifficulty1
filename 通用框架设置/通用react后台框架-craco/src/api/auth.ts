import fetch from 'utils/fetch';

import { LoginProps } from './models/authModel';

export const loginApi = (data: LoginProps) => fetch.post('/login', data);

export const logoutApi = () => fetch.post('/v1/logout');

export const getUserLoginInfoApi = () => fetch.get('/v1/roles');

export const getPermsApi = () => fetch.get('/internal-api/crm/perms');
