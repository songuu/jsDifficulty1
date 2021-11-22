import fetch from 'utils/fetch';

/*
 * 标签相关
 *
 */

// 获取所有类目
export const getMenus = () =>
  fetch.get('/internal-api/crm/common-tag/categories');

// 创建新类目
export const createMenu = (data: any) =>
  fetch.post(`/internal-api/crm/common-tag/categories`, data);

// 更新类目
export const updateMenu = (id: number, data: any) =>
  fetch.put(`/internal-api/crm/common-tag/categories/${id}`, data);

// 删除类目
export const deleteMenu = (id: number) =>
  fetch.delete(`/internal-api/crm/common-tag/categories/${id}`);

// 获取指定类目标签
export const getTagsOfMenu = (id: number, data: any) =>
  fetch.get(`/internal-api/crm/common-tag/categories/${id}/tags`, data);

// 创建新标签
export const createTag = (id: number, data: any) =>
  fetch.post(`/internal-api/crm/common-tag/categories/${id}/tags`, data);

// 获取所有标签
export const getTags = (data: any) =>
  fetch.get(`/internal-api/crm/common-tag/tags`, data);

// 	更新标签
export const updateTagUrl = (id: number, data: any) =>
  fetch.put(`/internal-api/crm/common-tag/tags/${id}`, data);

// 删除标签
export const deleteTagUrl = (id: number) =>
  fetch.delete(`/internal-api/crm/common-tag/tags/${id}`);

/*
 * 组织企业补充
 *
 */

export const getSupplementListApi = (data: any) =>
  fetch.get('/internal-api/crm/customers/names/pagelist', data);

export const addSupplementApi = (data: any) =>
  fetch.post(`/internal-api/crm/customers/names`, data);

export const deleteSupplementApi = (data: any) =>
  fetch.delete(`/internal-api/crm/customers/names/${data}`);

/*
 * 微信白名单
 *
 */
// 获取微信白名单列表数据
export const getWechatList = (data: any) => fetch.get('/v1/chatlink', data);

// 新增微信白名单数据
export const addWechat = (id: number, data: any) =>
  fetch.post(`/v1/chatlink/${id}/whitelist`, data);

// 删除微信白名单数据
export const deleteWechat = (id: number, data: any) =>
  fetch.delete(`/v1/chatlink/${id}/whitelist`, data);

// 搜索具体的白名单数据
export const searchWechat = (id: number, data: any) =>
  fetch.get(`/v1/chatlink/${id}/whitelist`, data);
