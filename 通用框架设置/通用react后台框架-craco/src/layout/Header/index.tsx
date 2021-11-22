import React, { useMemo, useState, memo } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/index';

import { logout } from 'store/actions';

import { platformList, platformMap } from 'constants/platform';

import { roleConfig } from 'utils/config';

import { Layout, Menu, Icon, Badge, Card } from 'antd';

const { Header } = Layout;

const SubMenu = Menu.SubMenu;

// @ts-ignore
import style from './index.module.less';

import laigu_logo from '../../images/laigu-logo.svg';
import meiqia_logo from '../../images/meiqia-logo.svg';

interface ILayoutHeaderProps {}

const LayoutHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user);
  const notificationCount = 0;
  const userInfo = useAppSelector(state => state.auth.userInfo);
  const platform = useAppSelector(state => state.auth.platform);

  const history = useHistory();

  const [visible, setVisible] = useState<boolean>(false);

  const otherPlatformList = useMemo(() => {
    const role = userInfo.CrmRole;
    const section = user.section;

    if (role === 'crm_superadmin' || section === 0) {
      return platformList.filter(item => item.value !== platform);
    }

    return [];
  }, [user, platform, userInfo]);

  const isLaigu = useMemo(() => {
    return platform === platformMap.多客;
  }, [platform]);

  // * 切换平台
  const onChangePlatform = (e: any) => {
    const { key } = e;

    // dispatch(changePlatform(parseInt(key, 10)));
    history.replace(`/`);
  };

  // * 转换角色
  const renderRole = (role: string | undefined) => {
    const roleFind = roleConfig.find(item => item.value === role);
    if (roleFind) {
      return roleFind.text;
    }
    return '';
  };

  // * 登出
  const handleLoginOut = () => {
    dispatch<any>(logout());
  };

  return (
    <Header>
      <div className={style.headerTop}>
        <div className={style.leftMenu} />
        <div className={style.rightMenu}>
          {otherPlatformList.length ? (
            <div
              className={style.imgBox}
              onClick={() =>
                onChangePlatform({
                  key: isLaigu ? 1 : 2,
                })
              }
            >
              {isLaigu ? (
                <img src={meiqia_logo} alt="meiqia" />
              ) : (
                <img src={laigu_logo} alt="laigu" />
              )}
            </div>
          ) : (
            ''
          )}
          <div
            className={style.tip}
            onClick={() => {
              setVisible(true);
            }}
          >
            {notificationCount > 0 ? (
              <Badge
                count={notificationCount > 99 ? 99 : notificationCount}
                offset={[0, 0]}
              >
                <Icon type="bell" className={style.bell} />
              </Badge>
            ) : (
              <Icon type="bell" className={style.bell} />
            )}
          </div>
          <Menu mode="horizontal" className={style.headerMenu}>
            <SubMenu title={<span>HI {user.name}</span>}>
              <Menu.Item style={{ height: '250px' }}>
                <Card
                  bordered={false}
                  bodyStyle={{ width: '250px', padding: '0px' }}
                >
                  <div className={style.menus}>
                    <div className={style.menuTitle}>{userInfo.Name}</div>
                    <div className={style.menuContent}>{userInfo.Account}</div>
                    <div className={style.menuContent}>
                      {renderRole(userInfo.CrmRole)}
                    </div>
                  </div>
                  <div className={style.line} />
                  <div className={style.menus}>
                    <div className={style.menuCap}>
                      <Link to="/clue/self">
                        <div>私海线索使用量</div>
                        <div>
                          <span>{userInfo.LeadUsed}</span> /{' '}
                          {userInfo.LeadCap === -1
                            ? '无限制'
                            : userInfo.LeadCap}
                        </div>
                      </Link>
                    </div>
                    <div className={style.menuCap}>
                      <Link to="/enterprise/self">
                        <div>私海客户使用量</div>
                        <div>
                          <span>{userInfo.CustomerUsed}</span> /{' '}
                          {userInfo.CustomerCap === -1
                            ? '无限制'
                            : userInfo.CustomerCap}
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className={style.line} />
                  <div className={style.menus} onClick={handleLoginOut}>
                    退出登录
                  </div>
                </Card>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default memo(LayoutHeader);
