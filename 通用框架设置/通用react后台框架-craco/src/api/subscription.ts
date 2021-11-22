import fetch from 'utils/fetch';

// * 获取订阅列表数据
export const getSubscriptionList = (data: any) =>
  fetch.get(`/v1/subscriptions`, data);
