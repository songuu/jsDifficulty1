// 数字三位加逗号
export function toThousands(num: number) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

// * 分转换为元
export function changFenToYuan(num: number) {
    const num1: number = Math.abs(num) || 0;
    let str = '';
    if (num1 >= 100) {
        const big = parseInt(String(num1 / 100), 10);
        const small = num1 - big * 100;
        str = `${big}.${small === 0 ? '00' : small < 10 ? '0' + small : small}`;
    } else {
        str = '0.' + `${num1 === 0 ? '00' : num1 < 10 ? '0' + num1 : num1}`;
    }
    /* eslint-disable */
    if (num1 > num) {
        return '-' + str;
    }
    return str;
}
