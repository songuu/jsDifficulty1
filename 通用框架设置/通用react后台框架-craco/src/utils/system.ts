import { message } from 'antd';

import {
    MenuListProps
} from '@/config/menuConfig'

export const copyToClip = (content: any) => {
    message.destroy();
    const aux = document.createElement('input');
    aux.setAttribute('value', content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);

    message.info('复制成功');
};

// * 动态计算文字的长度
export const getStringWidth = (val: string) => {
    let len = 0;
    for (let i = 0; i < val.length; i += 1) {
        const length = val.charCodeAt(i);
        if (length >= 0 && length <= 128) {
            len += 1;
        } else {
            len += 2;
        }
    }
    return len;
};

export const treeDataTranslate = (
    data: any[] | null,
    id = 'id',
    parentId = 'parent',
    addFields?: Record<string, any>
) => {
    if (!data) return;
    const res = [];
    const temp: any = {};
    for (let i = 0; i < data.length; i += 1) {
        temp[data[i][id]] = data[i];
    }
    for (let k = 0; k < data.length; k += 1) {
        if (temp[data[k][parentId]] && data[k][id] !== data[k][parentId]) {
            if (!temp[data[k][parentId]].children) {
                temp[data[k][parentId]].children = [];
            }
            if (typeof addFields === 'object') {
                Object.keys(addFields).forEach(key => {
                    data[k][key] = data[k][addFields[key]];
                });
            }
            temp[data[k][parentId]].children.push(data[k]);
        } else {
            if (typeof addFields === 'object') {
                Object.keys(addFields).forEach(key => {
                    data[k][key] = data[k][addFields[key]];
                });
            }
            res.push(data[k]);
        }
    }
    return res;
};

/**
 * 通过属性在menuList获取对应的menuItem
 * @param menuList
 * @param key
 * @param value
 * @returns
 */
export const getMenuItemInMenuListByProperty = (
    menuList: MenuListProps[],
    key: string,
    value: string,
): MenuListProps | null => {
    let stack: MenuListProps[] = []
    stack = menuList.concat(stack)
    let res: MenuListProps | null = null
    while (stack.length) {
        const cur = stack.shift() as MenuListProps
        if (cur.subMenu && cur.subMenu.length > 0) {
            stack = cur.subMenu.concat(stack)
        }
        // @ts-ignore
        if (cur[key] === value) {
            res = cur
            break
        }
    }
    return res
}
