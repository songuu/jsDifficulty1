import React, { useEffect, CSSProperties, memo } from 'react';
import { Spin } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });

// @ts-ignore
import styles from './index.module.less';

interface IPageLoadingProps {}

const PageLoading: React.FC<IPageLoadingProps> = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  };

  return (
    <div className={styles['app-container']}>
      <Spin style={style} size="large" />
    </div>
  );
};

export default memo(PageLoading);
