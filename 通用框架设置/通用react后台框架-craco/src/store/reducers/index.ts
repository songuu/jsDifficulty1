import { AnyAction, combineReducers, ReducersMapObject, Reducer } from 'redux';

import auth, { AuthStateProps } from './auth';
import customer from './customer';
import manage from './manage';
import order from './order';
import tag from './tag';
import user, { UserStateProps } from './user';
import app, { AppStateProps } from './app';
import { RootActions } from 'store/actions';

export type StoreActions = AnyAction | RootActions;

export interface StoreStateProps {
  auth: AuthStateProps;
  app: AppStateProps;
  user: UserStateProps;
}

const reducers: ReducersMapObject<StoreStateProps, StoreActions> = {
  auth,
  app,
  user,
};

const reducer: Reducer<StoreStateProps, StoreActions> =
  combineReducers(reducers);

export default reducer;
