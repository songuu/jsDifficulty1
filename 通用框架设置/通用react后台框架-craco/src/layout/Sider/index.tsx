import React, { useMemo } from 'react';

import { useAppSelector } from 'store/index';

import { Layout } from 'antd';

const { Sider } = Layout;

// @ts-ignore
import style from './index.module.less';

import Logo from './Logo';

import Menu from './Menu';

import { platformMap } from 'constants/platform';

interface ILayoutSiderProps {}

const LayoutSider: React.FC = () => {
  const platform = useAppSelector(state => state.auth.platform);
  const isLaigu = useMemo(() => {
    return platform === platformMap.多客;
  }, [platform]);
  return (
    <>
      <Sider
        trigger={null}
        className={style.sidebarClasses}
        collapsible
        collapsed={true}
      >
        <Logo isLaigu={isLaigu} />
        <Menu platform={platform} />
      </Sider>
    </>
  );
};

export default React.memo(LayoutSider);
