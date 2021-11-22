import { keyOfValueItem } from '@/config/interfaces'

export const chargeTypes: keyOfValueItem[] = [
    { value: 1, label: '呼入收费、呼出收费' },
    { value: 2, label: '呼入收费、呼出不收费' },
    { value: 3, label: '呼入不收费，呼出收费' },
    { value: 4, label: '呼入不收费、呼出不收费' }
];

export const statusOptions: keyOfValueItem[] = [
    { label: '全部', value: 0 },
    { label: '未启用', value: 1 },
    { label: '启用', value: 2 },
    { label: '已过期', value: 3 }
];

export const typeOptions: keyOfValueItem[] = [
    { label: '全部', value: 0 },
    { label: '手机号', value: 1 },
    { label: '固定电话', value: 2 },
    { label: '随机号码', value: 3 },
    { label: '自有号码', value: 4 }
];

export const purposeOptions: keyOfValueItem[] = [
    { label: '仅呼入', value: 1 },
    { label: '仅呼出', value: 2 },
    { label: '呼入/呼出', value: 3 }
];
