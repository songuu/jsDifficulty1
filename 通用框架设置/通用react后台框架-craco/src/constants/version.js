export const versionList = [
    { value: 3, text: '专业版' },
    { value: 4, text: '企业版' },
    { value: 9, text: '旗舰版' }
];

export const newVersionList = [
    { value: 1003, text: '专业版' },
    { value: 1004, text: '企业版' },
    { value: 1005, text: '旗舰版' }
];

export const allVersionList = [{ value: 1, text: '体验版' }, ...versionList];

export const allNewVersionList = [
    { value: 1001, text: '试用版' },
    { value: 1002, text: '体验版' },
    ...newVersionList
];

export const robotVersionList = [
    { value: 1201, text: '试用版' },
    { value: 1203, text: '专业版' },
    { value: 1204, text: '企业版' }
    // { value: 1205, text: '旗舰版' }
];

export const touchVersionList = [{ value: 1310, text: '默认版' }];

// * 营销机器人对应的方案版本
export const mPushVersionList = [
    { value: 1101, text: '体验版' },
    { value: 1102, text: '试用版' },
    { value: 1103, text: '专业版' },
    { value: 1104, text: '企业版' }
    // { value: 1105, text: '旗舰版' }
];

export const serviceList = {
    0: '未开通',
    1201: '试用版',
    1203: '专业版',
    1204: '企业版',
    1205: '旗舰版'
};

export const marketingList = {
    0: '未开通',
    1102: '试用版',
    1103: '专业版',
    1104: '企业版',
    1105: '旗舰版'
};

// * 营销触达
export const marketingTouchList = [
    {
        value: 0,
        text: '未开通'
    },
    ...touchVersionList
];

// * 平台版
export const platformList = [
    {
        value: 'enterprise',
        text: '未开通'
    },
    {
        value: 'platform',
        text: '已开通'
    }
];

// * 渠道版
export const channelList = [
    {
        value: 'enterprise',
        text: '未开通'
    },
    {
        value: 'channel',
        text: '已开通'
    }
];

// * 平台数据
export const versionData = [
    {
        title: '在线客服综合套餐',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: '体验版',
                value: '1',
                key: '0-0-2'
            },
            {
                title: '试用版',
                value: '2',
                key: '0-0-3'
            },
            {
                title: '专业版',
                value: '3',
                key: '0-0-4'
            },
            {
                title: '企业版',
                value: '4',
                key: '0-0-5'
            },
            {
                title: '旗舰版',
                value: '9',
                key: '0-0-6'
            }
        ]
    },
    {
        title: '在线客服',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: '体验版',
                value: '1002',
                key: '0-1-2'
            },
            {
                title: '试用版',
                value: '1001',
                key: '0-1-3'
            },
            {
                title: '专业版',
                value: '1003',
                key: '0-1-4'
            },
            {
                title: '企业版',
                value: '1004',
                key: '0-1-5'
            },
            {
                title: '旗舰版',
                value: '1005',
                key: '0-1-6'
            }
        ]
    }
];

export const subVersionData = [
    {
        title: '在线客服综合套餐',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: '专业版',
                value: '3',
                key: '0-0-4'
            },
            {
                title: '企业版',
                value: '4',
                key: '0-0-5'
            },
            {
                title: '旗舰版',
                value: '9',
                key: '0-0-6'
            }
        ]
    },
    {
        title: '在线客服',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: '专业版',
                value: '1003',
                key: '0-1-4'
            },
            {
                title: '企业版',
                value: '1004',
                key: '0-1-5'
            },
            {
                title: '旗舰版',
                value: '1005',
                key: '0-1-6'
            }
        ]
    },
    {
        title: '客服机器人',
        value: '0-2',
        key: '0-2',
        children: [
            {
                title: '专业版',
                value: '1203',
                key: '0-2-3'
            },
            {
                title: '企业版',
                value: '1204',
                key: '0-2-4'
            },
            {
                title: '旗舰版',
                value: '1205',
                key: '0-2-5'
            }
        ]
    },
    {
        title: '营销机器人',
        value: '0-3',
        key: '0-3',
        children: [
            {
                title: '专业版',
                value: '1103',
                key: '0-3-3'
            },
            {
                title: '企业版',
                value: '1104',
                key: '0-3-4'
            },
            {
                title: '旗舰版',
                value: '1105',
                key: '0-3-5'
            }
        ]
    },
    {
        title: '营销触达',
        value: '0-4',
        key: '0-4',
        children: [
            {
                title: '默认版',
                value: '1310',
                key: '0-4-2'
            }
        ]
    }
];

export const allVersions = [
    { value: 1001, text: '试用版' },
    { value: 1002, text: '体验版' },
    { value: 1003, text: '专业版' },
    { value: 1004, text: '企业版' },
    { value: 1005, text: '旗舰版' },
    { value: 1101, text: '体验版' },
    { value: 1102, text: '试用版' },
    { value: 1103, text: '专业版' },
    { value: 1104, text: '企业版' },
    { value: 1105, text: '旗舰版' },
    { value: 1201, text: '试用版' },
    { value: 1310, text: '默认版' },
    { value: 1203, text: '专业版' },
    { value: 1204, text: '企业版' },
    { value: 1205, text: '旗舰版' },
    { value: 1401, text: '试用版' },
    { value: 1402, text: '体验版' },
    { value: 1403, text: '专业版' },
    { value: 1404, text: '企业版' },
    { value: 1405, text: '旗舰版' }
];
