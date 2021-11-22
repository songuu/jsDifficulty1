import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { message } from 'antd';

import tokenHelper from 'utils/tokenHelper';
import { getStore } from 'utils/storeHelper';
// import store from 'store/index'

import { PLATFORM_STORAGE_KEY, platformMap } from 'constants/platform';
import toQueryString from './objectToQuery';

import { UploadFileParams, keyOfValueItem } from '@/config/interfaces';

/** 不同的响应类型 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

const headerDefaultContentType: keyOfValueItem = {
  GET: ContentTypeEnum.FORM_URLENCODED,
  POST: ContentTypeEnum.JSON,
  DELETE: ContentTypeEnum.FORM_URLENCODED,
  PUT: ContentTypeEnum.JSON,
};

const origin = process.env.REACT_APP_ORIGIN;
let url = origin;

if (origin === 'local') {
  const { location } = window;
  url = `${location.protocol}//${location.hostname}:8810`;
}

const instance = axios.create({
  baseURL: url,
  timeout: 30000,
});

// 拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const copyConfig = config;
  let platform = Number(localStorage.getItem(PLATFORM_STORAGE_KEY));
  if (!platform) {
    platform = platformMap.美洽;
  } else {
    platform = parseInt(String(platform), 10);
  }
  if (Number.isNaN(platform)) {
    platform = platformMap.美洽;
  }
  const token = tokenHelper.getToken();
  if (token) {
    copyConfig.headers.common['X-Sa-Token'] = token;
  }
  copyConfig.headers.common['X-Section'] = platform;

  return copyConfig;
});

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data;
    const { url } = response.config;
    const { responseType } = response.request;

    const { code, data: newData } = data;

    if (responseType && responseType === 'blob') {
      return data;
    }

    if ([20001, 20002, 20003].includes(code)) {
      // * 登陆失效
    } else if ([0, 200].includes(code)) {
      if (url?.includes('loyalty')) {
        return newData.data;
      } else {
        return newData;
      }
    } else if (code === 204) {
    } else {
      message.error(data.msg || '网络错误');
      return Promise.reject(data.msg || 'Error');
    }
  },
  (error: AxiosError) => {
    const response = error.response;
    const data = response && response.data;
    if (response) {
      switch (response.status) {
        case 400:
          error.message = data.msg || '错误请求';
          break;
        case 401:
          error.message = data.msg || 'token失效，请重新登录';
          break;
        case 403:
          error.message = data.msg || '非法token，拒绝访问';
          break;
        case 404:
          error.message = data.msg || '请求错误，资源找不到了';
          break;
        case 408:
          error.message = data.msg || '请求超时';
          break;
        case 500:
          error.message = data.msg || '服务器错误';
          break;
        default:
          error.message = data.msg || '连接错误';
      }
    } else {
      if (!window.navigator.onLine) {
        error.message = '网络中断';
      }
    }
    message.error(error.message);
    return Promise.reject(error);
  }
);

function request(
  config: AxiosRequestConfig & {
    custom?: any;
  }
) {
  const {
    url = '/',
    method = 'GET',
    params = null,
    headers = {},
    ...restData
  } = config;

  const defaultHeader = headerDefaultContentType[method];

  let body = params;
  let endUrl = url;
  const other = restData ? restData.custom : null;

  if (['POST' || 'PUT'].includes(method)) {
    if (headers['Content-Type'] === ContentTypeEnum.FORM_DATA) {
      body = params;
    } else {
      body = JSON.stringify(params);
    }
  } else {
    endUrl = `${url}?${toQueryString(params)}`;
    body = null;
  }

  return instance.request<any, any>({
    url: endUrl,
    method,
    data: body,
    headers: {
      'Content-Type': defaultHeader,
      ...headers,
    },
    ...other,
  });
}

const fetch = {
  get(
    url = '/',
    params?: Record<string, unknown>,
    headers?: any,
    custom?: any
  ) {
    return request({ url, method: 'GET', params, headers, custom });
  },
  post(url = '/', params = {}, headers = {}, custom = {}) {
    return request({ url, method: 'POST', params, headers, custom });
  },
  delete(url = '/', params = {}, headers = {}) {
    return request({ url, method: 'DELETE', params, headers });
  },
  put(url = '/', params = {}, headers = {}) {
    return request({ url, method: 'PUT', params, headers });
  },
};

export default fetch;
