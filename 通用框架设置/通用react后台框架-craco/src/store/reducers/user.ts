import * as types from '../action-types';
import { RootActions } from 'store/actions';
import { ManagerProps } from 'api/models/userModel';

export interface UserStateProps {
  managerList: ManagerProps[];
}

const initialState: UserStateProps = {
  managerList: [],
};

export default (state = initialState, action: RootActions) => {
  switch (action.type) {
    case types.SET_MANAGE_LIST:
      return {
        ...state,
        managerList: action.payload,
      };
    default:
      return state;
  }
};
