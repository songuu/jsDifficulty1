import { platformMap } from '../constants/platform';

export interface MenuListProps {
  name: string;
  path: string;
  icon?: string;
  perm?: string;
  platform?: number;
  subMenu?: MenuListProps[];
}

const MenuList: MenuListProps[] = [
  {
    name: '线索',
    path: '/clue',
    icon: 'strikethrough',
    perm: 'lead_read',
    platform: platformMap.美洽,
  },
  {
    name: '客户',
    path: '/enterprise',
    icon: 'user',
    perm: 'customer_read',
    platform: platformMap.美洽,
  },
  { name: '账户', path: '/customer', icon: 'account-book', perm: 'ent_read' },
  { name: '订单', path: '/order', icon: 'video-camera', perm: 'order_read' },
  {
    name: '订阅',
    path: '/subscription',
    icon: 'contacts',
    perm: '',
    platform: platformMap.美洽,
  },
  { name: '用户', path: '/user', icon: 'upload', perm: 'user_read' },
  {
    name: '管理',
    path: '/manage',
    icon: 'tool',
    platform: platformMap.美洽,
    subMenu: [
      { name: '标签', path: '/manage/tagmanage', perm: 'common_tag.tag.read' },
      {
        name: '微信白名单',
        path: '/manage/wechatBlankList',
        perm: 'chatlink_whitelist_read',
      },
      {
        name: '预开发票名单',
        path: '/manage/invoice-black-list',
        perm: 'invoice_read',
      },
      {
        name: '私海容量',
        path: '/manage/self-capacity',
        perm: 'capacity_read',
      },
      {
        name: '企业组织补充',
        path: '/manage/supplement',
        perm: 'customer_name_read',
      },
    ],
  },
  {
    name: '呼叫',
    path: '/call',
    icon: 'customer-service',
    platform: platformMap.美洽,
    subMenu: [
      { name: '中继管理', path: '/call/relay' },
      { name: '坐席管理', path: '/call/sip' },
    ],
  },
];

export const commonMenuList: MenuListProps[] = [];

export default MenuList;
