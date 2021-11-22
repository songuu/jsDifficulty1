import * as types from '../action-types';
import { Dispatch } from 'redux';
import { getManageListApi } from 'api/user';
import { ManagerProps } from 'api/models/userModel';

// * 设置用户
export interface SetManageListAction {
  type: types.SET_MANAGE_LIST_TYPE;
  payload: ManagerProps[];
}

export const setManagerList = (
  managerList: ManagerProps[]
): SetManageListAction => {
  return {
    type: types.SET_MANAGE_LIST,
    payload: managerList,
  };
};

export const getManagerList =
  () =>
  (dispatch: Dispatch) => {
    getManageListApi().then(response => {
      dispatch(setManagerList(response));
    });
  };

export type UserAction = SetManageListAction;
