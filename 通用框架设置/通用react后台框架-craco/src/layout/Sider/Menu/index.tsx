import React from 'react';

import { Menu } from 'antd';

import { Link, useLocation } from 'react-router-dom';

import menuList, { MenuListProps } from '@/config/menuConfig';

// @ts-ignore
// import variables from 'styles/variables.module.less';

import { checkPerm } from 'utils/perm';

interface IMenuProps {
  platform: number;
}

const MenuContainer: React.FC<IMenuProps> = ({ platform }) => {
  const location = useLocation();

  const handleMenuSelecte = () => {};

  const path: string = location.pathname;

  /** 生成菜单项 */
  const generatorMenuItem = (menu: MenuListProps) => {
    let node = null;

    const { platform: menuPlatformConfig, perm } = menu;

    const hasRole = perm ? checkPerm(perm) : true;

    // 如果有platform配置，就检测单个的平台
    if (menuPlatformConfig && menuPlatformConfig !== platform) {
      return null;
    }

    if (!hasRole) {
      return false;
    }

    if (menu.subMenu && menu.subMenu.length > 0) {
      node = (
        <Menu.SubMenu title={menu.name} key={menu.path}>
          {menu.subMenu.map((child: MenuListProps) => {
            return generatorMenuItem(child);
          })}
        </Menu.SubMenu>
      );
    } else {
      node = (
        <Menu.Item key={menu.path}>
          <Link to={menu.path}>{menu.name}</Link>
        </Menu.Item>
      );
    }

    return node;
  };

  return (
    <div style={{ height: `calc(100% - 48px)` }}>
      {menuList.map(item => {
        return (
          <Menu
            mode="inline"
            theme="dark"
            onSelect={handleMenuSelecte}
            key={item.path}
            selectedKeys={[path]}
            defaultOpenKeys={[]}
          >
            {generatorMenuItem(item)}
          </Menu>
        );
      })}
    </div>
  );
};

export default MenuContainer;
