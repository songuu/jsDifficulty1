import React, { Suspense, useContext, useMemo } from 'react';
import { useAppSelector } from 'store/index';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DocumentTitle from 'react-document-title';
import { Layout } from 'antd';
import MenuList from '@/config/menuConfig';
import routesConfig, { routeProps } from '@/config/routeMap';
import { platformMap } from 'constants/platform';
import { getMenuItemInMenuListByProperty } from 'utils/system';
import { checkPerm } from 'utils/perm';

import { PageLoading } from 'components/index';

const { Content } = Layout;

// @ts-ignore
import style from './index.module.less';

const getPageTitle = (value: string, platformName: string): string => {
  const item = getMenuItemInMenuListByProperty(MenuList, 'path', value);
  if (item) {
    return item.name + ' - ' + platformName;
  }
  return platformName;
};

const LayoutContent: React.FC = () => {
  const location = useLocation();

  const platform = useAppSelector(state => state.auth.platform);

  const platformName = useMemo(() => {
    if (platform === platformMap.美洽) {
      return '美洽';
    } else {
      return '来鼓';
    }
  }, [platform]);

  const filterRoute = (route: routeProps) => {
    if (route.perm) {
      return checkPerm(route.perm);
    }

    return true;
  };

  return (
    <DocumentTitle title={getPageTitle(location.pathname, platformName)}>
      <Content className={style.container}>
        <Suspense fallback={<PageLoading />}>
          {/* <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              timeout={500}
              classNames="fadeInLeft"
              exit={false}
            > */}
          <Switch>
            {routesConfig.map((route: routeProps) => {
              return filterRoute(route) ? (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={!route.noExtra}
                  component={route.component}
                />
              ) : null;
            })}
            <Redirect to="/customer" from="/" exact />
          </Switch>
          {/* </CSSTransition>
          </TransitionGroup> */}
        </Suspense>
      </Content>
    </DocumentTitle>
  );
};

export default React.memo(LayoutContent);
