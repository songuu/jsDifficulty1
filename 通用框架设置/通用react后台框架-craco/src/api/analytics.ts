import fetch from 'utils/fetch';

// * 获取健康度数据
export const getAnalyticsData = (data: any) => {
    return fetch.post(
        `/internal-api/crm/enterprises/${data.ent_id}/analytics/query?timezone=8`,
        data
    );
};

// * 获取在线数据
export const getOnlineData = (data: any) => {
    return fetch.get(`/internal-api/crm/enterprises/${data.ent_id}/analytics/online-stats`, data);
};

// * 获取分组
export const getGroupData = (data: any) => {
    return fetch.get(`/internal-api/crm/enterprises/${data.ent_id}/agents?group_by=group`);
};
