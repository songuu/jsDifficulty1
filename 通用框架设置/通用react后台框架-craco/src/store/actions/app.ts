import * as types from '../action-types';
import { Dispatch } from 'redux';
import { getAppTagListApi } from 'api/app';
import { AppTagList } from 'api/models/appModel';

// * 设置系统的tag
export interface SetAppTagAction {
  type: types.SET_APP_TAG_LIST_TYPE;
  payload: AppTagList[];
}

export const setAppTagList = (appTagList: AppTagList[]): SetAppTagAction => {
  return {
    type: types.SET_APP_TAG_LIST,
    payload: appTagList,
  };
};

export const getAppTagList =
  () =>
  (dispatch: Dispatch): void => {
    getAppTagListApi().then(response => {
      dispatch(setAppTagList(response));
    });
  };

export type AppAction = SetAppTagAction;
