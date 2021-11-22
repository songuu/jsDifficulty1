import fetch from '../utils/fetch';

// * 获取系统标签
export const getAppTagListApi = () => fetch.get('/v1/tags');
