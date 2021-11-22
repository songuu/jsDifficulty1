import fetch, { ContentTypeEnum } from 'utils/fetch';

import { PLATFORM_STORAGE_KEY } from 'constants/platform';

export const getCustomerListApi = (data: any) =>
  fetch.get(`/internal-api/crm/customers/pagelist`, data);

export const addCustomerApi = (data: any) =>
  fetch.post(`/internal-api/crm/customers`, data);

export const editCustomerApi = (data: any) =>
  fetch.put(`/internal-api/crm/customers`, data);

export const goAssign = (leadId: number[], userId: number) =>
  fetch.put(`/internal-api/crm/customers/assign`, {
    customer_id: leadId,
    target_id: userId,
  });

export const goPublicApi = (id: number[]) =>
  fetch.put(`/internal-api/crm/customers/free`, { customer_id: id });

export const goPrivateApi = (id: number[]) =>
  fetch.put(`/internal-api/crm/customers/obtain`, { customer_id: id });

export const getDetailApi = (id: string) =>
  fetch.get(`/internal-api/crm/customers/detail?customer_id=${id}`);

export const connectEnterpriseApi = (customer_id: number, ent_id: number) =>
  fetch.put(`/internal-api/crm/customers/entlink`, {
    customer_id,
    ent_id,
  });

export const getEnterpriseListApi = (ids: number[]) =>
  fetch.get(`/v1/customer/multi?ents=${ids.join(',')}`);

export const addFollowApi = (data: any) =>
  fetch.post(`/internal-api/crm/custemers/follow`, data);

export const getLaiguCustomerApi = (data: any) =>
  fetch.get('/laigu/customers', data);

export const editLaiguOnwerApi = (id: number, data: any) =>
  fetch.put(`/laigu/customers/${id}/user`, data);

export const createOrderApi = (data: any) => fetch.post('/v1/orders', data);

export const createTestApi = (id: number, data: any) =>
  fetch.put(`/v1/customers/${id}/trial`, data);

export const editOldPlanBalance = (id: number, data: any) =>
  fetch.put(`/v1/customers/${id}/status`, data);

export const editPlanBalance = (id: number, data: any) =>
  fetch.put(`/v1/customers/${id}/agent-plan`, data);

// 企业用户注销
export const userOffApi = (id: number, data: any) =>
  fetch.put(`/v1/customers/${id}/unregister-status`, data);

// 修改超管账号
export const modifySuperAdminCount = (id: number, data: any) =>
  fetch.put(`/v1/customers/${id}/account`, data);

// 修改企业行业
export const modifyCompanyType = (id: string | number, data: any) =>
  fetch.put(`/v1/customers/${id}/industry`, data);

// 客户解除企业账号
export const unlinkEnt = (data: any) =>
  fetch.put(`/internal-api/crm/customers/ent-unlink`, data);

// * 拉取资金消耗记录
export const getDecLogs = (eid: number, data: any) =>
  fetch.get(`/internal-api/crm/enterprises/${eid}/balance/dec-logs`, data);

// * 获取操作日志
export const getOperations = (data: any) => fetch.get(`/v1/operations`, data);

// * 获取订单列表
export const getOrderList = (data: any) => fetch.get(`/v1/orders`, data);

// * 获取跟进记录的列表
export const getTracksList = (data: any) =>
  fetch.get(`/internal-api/crm/tracks`, data);

// * 创建跟进记录
export const makeTrack = (data: any) => fetch.post(`/internal-api/crm/tracks`, data);

// * 获取联系人数据
export const getContactList = (data: any) =>
  fetch.get(`/internal-api/crm/contactors`, data);

// * 添加联系人数据
export const addContact = (data: any) =>
  fetch.post(`/internal-api/crm/contactors`, data);

// * 编辑联系人数据
export const editContact = (data: any) =>
  fetch.put(`/internal-api/crm/contactors`, data);

// * 删除联系人数据
export const delContact = (data: any) =>
  fetch.delete(`/internal-api/crm/contactors`, data);

// * 获取行业列表
export const getIndustries = () => {
  fetch.get('/v1/industries')
}

// * 获取来源数据
export const getMediums = () => {
  const platform = localStorage.getItem(PLATFORM_STORAGE_KEY);

  if (!platform || platform === '1') {
    return fetch.get('/v1/medium');
  } else {
    return fetch.get('/laigu/medium');
  }
}

// * 添加跟进
export const addFollowUp = (data: any) =>
  fetch.post('/v1/comments', data);

// * 获取客户详情
export const getCustomerDetail = (params: any) =>
  fetch.get(`/v1/customers/${params}`);


// * 编辑客户管理者
export const editCustomerManager = (params: any) => {
  const { id, ...otherParams } = params;
  return fetch.put(`/v1/customers/${id}/manager`, otherParams);
}

// * 上传图片
export const uploadImage = async (file: any, onProgress: any) => {
  return fetch.post(
    '/v1/finances/image',
    file,
    { 'Content-Type': ContentTypeEnum.FORM_DATA },
    {
      onUploadProgress: ({ total, loaded }: {
        total: number;
        loaded: number;
      }) => {
        onProgress({ percent: Math.round((loaded / total) * 100) }, file);
      },
    }
  );
};
