import React, { memo } from 'react';
import { Spin } from 'antd';
// @ts-ignore
import style from './index.module.less';

interface IAppLoadingProps {}

const AppLoading: React.FC<IAppLoadingProps> = () => {
  return (
    <div className={style.apploadingcontainer}>
      <div className={style.apploadingspinicon}>
        <Spin size="large" />
      </div>
      <h1 className={style.apploadingtitle}>销售系统</h1>
    </div>
  );
};

export default memo(AppLoading);
