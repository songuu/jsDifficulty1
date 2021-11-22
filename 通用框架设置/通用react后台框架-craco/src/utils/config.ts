type ItemProps = {
  value: number | string;
  text: string;
  roles?: string[];
};

type KeyValueProps = {
  [K in string | number]: string | string[];
};

// 版本配置，专业版1，企业版2
export const versionConfig: ItemProps[] = [
  { value: 1, text: '体验版' },
  { value: -1, text: '试用版' },
  { value: 2, text: '标准版' },
  { value: 3, text: '专业版' },
  { value: 4, text: '企业版' },
  { value: 9, text: '旗舰版' },
];

// 套餐配置
export const packageConfig1: ItemProps[] = [
  { value: 5, text: '基础产品' },
  { value: 6, text: '入门套餐' },
  { value: 7, text: '进阶套餐' },
  { value: 8, text: '高阶套餐' },
];

// * 新的套餐配置
export const packageConfig: ItemProps[] = [
  { value: 11, text: '全功能套餐' },
  { value: 10, text: '试用' },
];

// 支付方式配置
export const payMethod: ItemProps[] = [
  { value: 'offline_alipay', text: '支付宝对公转账' },
  { value: 'online_alipay', text: '支付宝在线支付' },
  { value: 'offline_b2b', text: '线下对公转账' },
  {
    value: 'payed',
    text: '预付款',
    roles: ['销售专员', 'crm_agentadmin', 'crm_superadmin'],
  },
  {
    value: 'no_pay',
    text: '非实收款',
    roles: ['crm_agentadmin', 'crm_reseller', 'crm_superadmin'],
  },
];

export const foramtPayMethod: ItemProps[] = [
  ...payMethod,
  { value: 'alipay', text: '支付宝线上支付' },
  { value: 'weixinpay', text: '微信线上支付' },
  { value: 'offline', text: '对公转账' },
];

// 商品大分类
export const productType: ItemProps[] = [
  { value: 1, text: '版本' },
  { value: 2, text: '应用' },
  { value: 3, text: '流量' },
];

export const roleConfig: ItemProps[] = [
  { text: '超级管理员', value: 'crm_superadmin' },
  { text: '销售管理员', value: 'crm_salesadmin' },
  { text: '销售专员', value: 'crm_salesman' },
  { text: '客服管理员', value: 'crm_agentadmin' },
  { text: '客服专员', value: 'crm_agent' },
  { text: '分销商', value: 'crm_reseller' },
  { text: '财务专员', value: 'crm_treasurer' },
  { text: '海外销售', value: 'crm_intersales' },
];

// 开通类型
export const buyType: ItemProps[] = [
  { value: 1, text: '试用' },
  { value: 2, text: '开通' },
  { value: 3, text: '续订' },
  { value: 4, text: '升级' },
];

export const reg_source_map = {
  kuaishou: '快手',
};

export const utmItems = {
  utm_source: 'utm_source',
  utm_medium: 'utm_medium',
  utm_campaign: 'utm_campaign',
  utm_content: 'utm_content',
  utm_term: 'utm_term',
  utm_search_engine: 'utm_search_engine',
  utm_browser: 'utm_browser',
  referral: 'referral',
};

export const utmShowingMap: KeyValueProps = {
  推荐注册: 'none',
  tian: [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'utm_search_engine',
  ],
  dizhu: [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'utm_search_engine',
  ],
  自然搜索: ['utm_search_engine', 'referral'],
  直接访问: ['utm_browser'],
  引荐流量: [
    'referral',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'utm_search_engine',
    'utm_browser',
  ],
  meiqiamarketing: [
    'referral',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'utm_search_engine',
    'utm_browser',
  ],
  分销: 'none',
  官方合作平台: 'none',
};

// 风控
export const riskStatusList: ItemProps[] = [
  { value: 'black', text: '黑名单' },
  { value: 'gray', text: '灰名单' },
  { value: 'white', text: '白名单' },
  { value: 'normal', text: '正常' },
];

//  认证地区
export const certifyRegions: ItemProps[] = [
  { value: 'domestic', text: '中国大陆' },
  { value: 'overseas', text: '港澳台及海外' },
];

//  认证类型
export const certifyTypes: ItemProps[] = [
  { value: 1, text: '个人' },
  { value: 2, text: '企业' },
  { value: 3, text: '其他组织' },
];

//  获取准确认证类型，返回值格式为： '[认证类型英文缩写]_[认证地区]'
export const getPreciseCertifyType = (region: string, type: string) => {
  const typeMap = new Map();

  certifyTypes.forEach(item => {
    switch (item.value) {
      case 1: {
        typeMap.set(item.value, 'personal');
        break;
      }

      case 2: {
        typeMap.set(item.value, 'ent');
        break;
      }

      case 3: {
        typeMap.set(item.value, 'org');
        break;
      }

      default:
        break;
    }
  });

  return `${typeMap.get(type) || ''}_${region || ''}`;
};

//  认证状态
export const certifyStatus: ItemProps[] = [
  { value: 0, text: '未认证' },
  { value: 1, text: '已认证' },
  { value: 2, text: '认证中' },
  { value: 3, text: '认证不通过' },
];

//  客户操作类型
export const operationActionTypes: KeyValueProps = {
  'customer.create': '创建客户',
  'customer.update': '更新客户',
  'customer.assign': '更改客户归属',
  'customer.auto_assign': '自动更新客户归属',
  'status.create': '创建余额',
  'status.update': '更新余额记录',
  'status.set': '调整余额',
  'status.start_trial': '开通试用',
  'status.continue_trial': '延长试用',
  'status.change_by_order': '下订单后更新余额',
  'order.create': '创建订单',
  'order.update': '更新订单',
  'order.confirm': '确认订单',
  'order.cancel': '取消订单',
  'comment.create': '创建跟进记录',
  'certify.failed': '认证失败',
  'certify.finish': '认证成功',
  'customer.tag.update': '更新账户标签',
  'customer.account.update': '修改超管账号',
} as const;

// 线索状态
export const stateMap: KeyValueProps = {
  public: '公海',
  private: '私海',
  pending: '待处理',
  transformed: '已转化',
};

export const healthConfig: KeyValueProps = {
  UnCalcBlacklist: '未计算-黑名单',
  UnCalcLoss: '未计算-流失',
  UnCalcFree: '未计算-非付费',
  Health: '健康',
  Warning: '预警',
  Danger: '危险',
};

export const userOffConfig: KeyValueProps = {
  0: '',
  1: '正常',
  2: '申请注销',
  3: '已注销',
};

export default {};
