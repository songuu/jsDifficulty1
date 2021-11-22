import * as types from '../action-types';
import { RootActions } from 'store/actions';
import { AppTagList } from 'api/models/appModel';

export interface AppStateProps {
  AppTagList: AppTagList[];
}

const initialState: AppStateProps = {
  AppTagList: [],
};

export default (state = initialState, action: RootActions) => {
  switch (action.type) {
    case types.SET_APP_TAG_LIST:
      return {
        ...state,
        AppTagList: action.payload,
      };
    default:
      return state;
  }
};
