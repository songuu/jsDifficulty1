import fetch from 'utils/fetch';

export const getTagListApi = () => fetch.get(`/v1/tags`);

export const editTag = (data: any) => fetch.put(`/v1/tags`, data);

// * 给客户修改标签
export const addClientTag = (data: any) =>
  fetch.post(`/internal-api/crm/customers/tags`, data);
