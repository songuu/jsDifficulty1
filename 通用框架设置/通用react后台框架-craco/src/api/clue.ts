import fetch from 'utils/fetch';

export const getClueListApi = (data: any) =>
  fetch.get(`/internal-api/crm/leads`, data);

export const getClueDetailApi = (id: string) =>
  fetch.get(`/internal-api/crm/leads/detail?lead_id=${id}`);

export const goPublicApi = (id: string[]) =>
  fetch.put(`/internal-api/crm/leads/free`, { lead_id: id });

export const goPrivateApi = (id: string[], otherParams: any) =>
  fetch.put(`/internal-api/crm/leads/obtain`, { lead_id: id, ...otherParams });

// 线索分配
export const goAssign = (leadId: string[], data: any) =>
  fetch.put(`/internal-api/crm/leads/assign`, { lead_id: leadId, ...data });

export const getCompanyList = (name: string) =>
  fetch.get(`/internal-api/crm/customers/namelist`, { name });

export const transferApi = (data: any) =>
  fetch.post(`/internal-api/crm/customers/transfer`, data);

export const getEnterpriseDetailApi = (id: number) => fetch.get(`/v1/customers/${id}`);

export const addFollowApi = (data: any) =>
  fetch.post(`/internal-api/crm/leads/follow `, data);

export const getMediumApi = () => fetch.get('/v1/medium');
