import fetch from '../utils/fetch';

// * 获取用户列表
export const getManageListApi = () => fetch.get('/v1/managers');

// * 获取指定用户的信息
export const getUserInfoApi = (id: number) =>
  fetch.get(`/internal-api/crm/users/${id}/person-centor`);

// * 获取权限列表
export const getPermApi = () => fetch.get('/internal-api/crm/perms');

// * 删除指定用户
export const deleteUserApi = (id: number) => fetch.get(`/v1/users/${id}`);

// * 编辑用户
export const editUserApi = (params: any) => {
  const { id, ...otherParams } = params;
  if (id) {
    return fetch.put(`/v1/users/${id}`, otherParams);
  }
  return fetch.post('/v1/users', otherParams);
};
