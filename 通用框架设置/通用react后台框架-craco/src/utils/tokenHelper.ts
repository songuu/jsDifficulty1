const __TOKEN_STORAGE_KEY__ = '__TOKEN_STORAGE_KEY__';

export default {
  getToken: () => {
    return localStorage.getItem(__TOKEN_STORAGE_KEY__);
  },
  setToken: (token: string) => {
    localStorage.setItem(__TOKEN_STORAGE_KEY__, token);
  },
  clearToken: () => {
    localStorage.setItem(__TOKEN_STORAGE_KEY__, '');
  },
};
