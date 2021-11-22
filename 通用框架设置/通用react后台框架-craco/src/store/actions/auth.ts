import * as types from '../action-types';
import { Dispatch } from 'redux';
import {
  loginApi,
  logoutApi,
  getUserLoginInfoApi,
  getPermsApi,
} from 'api/auth';
import { getUserInfoApi } from 'api/user';
import { UserInfo } from 'api/models/userModel';
import { LoginProps, UserLoginInfo } from 'api/models/authModel';
import { PLATFORM_STORAGE_KEY } from 'constants/platform';
import { getPlatformBySection } from 'utils/platformHelper';
import tokenHelper from 'utils/tokenHelper';

// * 登陆
export interface LoginAction {
  type: types.AUTH_LOGIN_TYPE;
}

// * 登出
export interface LogoutAction {
  type: types.AUTH_LOGOUT_TYPE;
}

// * 设置token
export interface ISetTokenAction {
  type: types.SET_TOKEN_TYPE;
  payload: string;
}

// * 清除token
export interface IResetUserAction {
  type: types.RESET_USER_TYPE;
}

// * 设置平台
export interface SetPlatformAction {
  type: types.SET_PLATFORM_TYPE;
  payload: number;
}

// * 设置登录用户信息
export interface SetUserLoginInfoAction {
  type: types.SET_USER_LOGIN_INFO_TYPE;
  payload: UserLoginInfo;
}

// * 设置当前用户信息
export interface SetUserInfoAction {
  type: types.SET_USER_INFO_TYPE;
  payload: UserInfo;
}

// * 设置权限
export interface SetPermsAction {
  type: types.SET_PERMS_TYPE;
  payload: string[];
}

// * 注销时清除用户信息
export interface ResetUserAction {
  type: types.RESET_USER_TYPE;
}

export type AsyncLoginAction = ReturnType<typeof login>;

export type AsyncLogoutAction = ReturnType<typeof logout>;

export const setPlatform = (platform: number): SetPlatformAction => {
  return {
    type: types.SET_PLATFORM,
    payload: platform,
  };
};

export const setUserToken = (payload: string): ISetTokenAction => {
  return {
    type: types.SET_TOKEN,
    payload,
  };
};

export const setUserLoginInfo = (
  payload: UserLoginInfo
): SetUserLoginInfoAction => {
  return {
    type: types.SET_USER_LOGIN_INFO,
    payload,
  };
};

export const setUserInfo = (payload: UserInfo): SetUserInfoAction => {
  return {
    type: types.SET_USER_INFO,
    payload,
  };
};

export const setPerms = (payload: string[]): SetPermsAction => {
  return {
    type: types.SET_PERMS,
    payload,
  };
};

export const resetUser = (): ResetUserAction => {
  return {
    type: types.RESET_USER,
  };
};

export const login =
  (loginInfo: LoginProps) =>
  (dispatch: Dispatch): Promise<any> => {
    return new Promise((resolve, reject) => {
      loginApi(loginInfo)
        .then(response => {
          const { section, token } = response;

          const platform = getPlatformBySection(section);

          if (platform && !Number.isNaN(platform)) {
            // 存在本地
            localStorage.setItem(PLATFORM_STORAGE_KEY, String(platform));
            setPlatform(platform);
          }

          if (token) {
            tokenHelper.setToken(token);
            
            dispatch(setUserToken(token));

            resolve(response);
          }
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  };

export const logout =
  () =>
  (dispatch: Dispatch): Promise<any> => {
    return new Promise((resolve, reject) => {
      logoutApi().then(() => {
        tokenHelper.clearToken();
        window.location.href = '/login';
      });
    });
  };

export type AuthAction =
  | LoginAction
  | LogoutAction
  | SetPlatformAction
  | SetUserLoginInfoAction
  | SetUserInfoAction
  | SetPermsAction
  | ResetUserAction
  | ISetTokenAction;
