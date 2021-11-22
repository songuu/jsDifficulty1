import React, { useState, useEffect } from 'react';

import { Layout } from 'antd';

import { useAppDispatch, useAppSelector } from 'store/index';

import { getUserLoginInfoApi, getPermsApi } from 'api/auth';
import { getUserInfoApi } from 'api/user';

import Content from './Content';
import Sider from './Sider';
import Header from './Header';

import {
  setUserLoginInfo,
  setPerms,
  setUserInfo,
  getManagerList,
  getAppTagList,
} from 'store/actions';

const BaseLayout: React.FC = () => {
  const dispatch = useAppDispatch();

  const userInfo = useAppSelector(state => state.auth.userInfo);

  const perms = useAppSelector(state => state.auth.perms);

  // * 获取初始化需要的数据
  const getData = async () => {
    try {
      Promise.all([
        getUserLoginInfoApi().then(res => {
          return res;
        }),
        getPermsApi().then(res => {
          return res.perms;
        }),
      ]).then(res => {
        const [useInfo, perms] = res;
        dispatch(setUserLoginInfo(useInfo));
        dispatch(setPerms(perms));
        getUserInfoApi(useInfo.user_id).then(res1 => {
          dispatch(setUserInfo(res1));
        });
      });
      dispatch<any>(getManagerList());
      dispatch<any>(getAppTagList());
    } catch (err: unknown) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  useEffect(() => {
    console.log(111)
    getData();
    // eslint-disable-next-line
  }, []);

  if (!userInfo || !perms.length) {
    return null;
  }

  return (
    <>
      <Layout style={{ minHeight: '100%', width: '100%' }}>
        <Sider />
        <Layout>
          <Header />
          <Content />
        </Layout>
      </Layout>
    </>
  );
};

export default React.memo(BaseLayout);
