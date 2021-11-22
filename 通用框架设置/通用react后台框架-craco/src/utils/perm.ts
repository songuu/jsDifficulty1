import store from 'store/index';

export const checkPerm = (key = '') => {
  const state = store.getState();
  const perms = state.auth.perms;
  return perms.includes(key);
};
