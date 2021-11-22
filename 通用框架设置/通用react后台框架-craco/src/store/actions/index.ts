import { Types } from '../action-types';
import { Dispatch } from 'react';
import { Action, AnyAction } from 'redux';

import {
  login,
  logout,
  setUserLoginInfo,
  setPerms,
  setUserInfo,
  AuthAction,
} from './auth';

import { getManagerList, UserAction } from './user';

import { getAppTagList, AppAction } from './app';

/** 自定义通用同步Action */
export interface CommonAction<T = any> {
  type: Types;
  payload?: T;
}

/** 自定义通用同步ActionCreator */
export interface CommonActionCreator<T = any> {
  (options?: T): CommonAction<T>;
}

/** 自定义通用异步ActionCreator*/
export interface CommonAsyncActionCreator<
  T = any,
  R = any,
  A extends Action = AnyAction
> {
  (options?: T): (dispatch: Dispatch<A>) => R;
}

/** 应用ActionCreator */
export interface RootActionsCreator {
  (): RootActions;
}

/** 应用Actions */
export type RootActions = AuthAction | UserAction | AppAction;

export {
  login,
  logout,
  setUserLoginInfo,
  setPerms,
  setUserInfo,
  getManagerList,
  getAppTagList,
};
