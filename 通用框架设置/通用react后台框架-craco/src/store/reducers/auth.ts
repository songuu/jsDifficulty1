import * as types from '../action-types';
import { RootActions } from 'store/actions';
import { UserLoginInfo } from 'api/models/authModel';
import { UserInfo } from 'api/models/userModel';

export interface AuthStateProps {
  token: string;
  platform: number;
  user: Partial<UserLoginInfo>;
  perms: string[];
  userInfo: Partial<UserInfo>;
}

const initialState: AuthStateProps = {
  token: '',
  platform: 1,
  user: {},
  perms: [],
  userInfo: {},
};

export default (state = initialState, action: RootActions) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case types.SET_PLATFORM:
      return {
        ...state,
        platform: action.payload,
      };
    case types.SET_USER_LOGIN_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case types.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case types.SET_PERMS:
      return {
        ...state,
        perms: action.payload,
      };
    case types.RESET_USER:
      return {
        token: '',
        platform: 1,
        user: {},
        perms: [],
        userInfo: {},
      };
    default:
      return state;
  }
};
