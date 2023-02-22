// 将数字转换成汉语的输出 不超过10000亿的数字
// 例如：123 -> 一百二十三
// 例如：123456 -> 一十二万三千四百五十六
// 例如：123456789 -> 一亿二千三百四十五万六千七百八十九

// 1. 个位数
function getDigit(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一");
    map.set(2, "二");
    map.set(3, "三");
    map.set(4, "四");
    map.set(5, "五");
    map.set(6, "六");
    map.set(7, "七");
    map.set(8, "八");
    map.set(9, "九");
    return map.get(num);
}

// 2. 十位数
function getTen(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "十");
    map.set(2, "二十");
    map.set(3, "三十");
    map.set(4, "四十");
    map.set(5, "五十");
    map.set(6, "六十");
    map.set(7, "七十");
    map.set(8, "八十");
    map.set(9, "九十");
    return map.get(num);
}

// 3. 百位数
function getHundred(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一百");
    map.set(2, "二百");
    map.set(3, "三百");
    map.set(4, "四百");
    map.set(5, "五百");
    map.set(6, "六百");
    map.set(7, "七百");
    map.set(8, "八百");
    map.set(9, "九百");
    return map.get(num);
}

// 4. 千位数
function getThousand(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一千");
    map.set(2, "二千");
    map.set(3, "三千");
    map.set(4, "四千");
    map.set(5, "五千");
    map.set(6, "六千");
    map.set(7, "七千");
    map.set(8, "八千");
    map.set(9, "九千");
    return map.get(num);
}

// 5. 万位数
function getTenThousand(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一万");
    map.set(2, "二万");
    map.set(3, "三万");
    map.set(4, "四万");
    map.set(5, "五万");
    map.set(6, "六万");
    map.set(7, "七万");
    map.set(8, "八万");
    map.set(9, "九万");
    return map.get(num);
}

// 6. 十万位数
function getHundredThousand(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "十万");
    map.set(2, "二十万");
    map.set(3, "三十万");
    map.set(4, "四十万");
    map.set(5, "五十万");
    map.set(6, "六十万");
    map.set(7, "七十万");
    map.set(8, "八十万");
    map.set(9, "九十万");
    return map.get(num);
}

// 7. 百万位数
function getMillion(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一百万");
    map.set(2, "二百万");
    map.set(3, "三百万");
    map.set(4, "四百万");
    map.set(5, "五百万");
    map.set(6, "六百万");
    map.set(7, "七百万");
    map.set(8, "八百万");
    map.set(9, "九百万");
    return map.get(num);
}

// 8. 千万位数
function getTenMillion(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一千万");
    map.set(2, "二千万");
    map.set(3, "三千万");
    map.set(4, "四千万");
    map.set(5, "五千万");
    map.set(6, "六千万");
    map.set(7, "七千万");
    map.set(8, "八千万");
    map.set(9, "九千万");
    return map.get(num);
}

// 9. 亿位数
function getHundredMillion(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一亿");
    map.set(2, "二亿");
    map.set(3, "三亿");
    map.set(4, "四亿");
    map.set(5, "五亿");
    map.set(6, "六亿");
    map.set(7, "七亿");
    map.set(8, "八亿");
    map.set(9, "九亿");
    return map.get(num);
}

// 10. 十亿位数
function getThousandMillion(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "十亿");
    map.set(2, "二十亿");
    map.set(3, "三十亿");
    map.set(4, "四十亿");
    map.set(5, "五十亿");
    map.set(6, "六十亿");
    map.set(7, "七十亿");
    map.set(8, "八十亿");
    map.set(9, "九十亿");
    return map.get(num);
}

// 11. 百亿位数
function getBillion(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一百亿");
    map.set(2, "二百亿");
    map.set(3, "三百亿");
    map.set(4, "四百亿");
    map.set(5, "五百亿");
    map.set(6, "六百亿");
    map.set(7, "七百亿");
    map.set(8, "八百亿");
    map.set(9, "九百亿");
    return map.get(num);
}

// 12. 千亿位数
function getTenBillion(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一千亿");
    map.set(2, "二千亿");
    map.set(3, "三千亿");
    map.set(4, "四千亿");
    map.set(5, "五千亿");
    map.set(6, "六千亿");
    map.set(7, "七千亿");
    map.set(8, "八千亿");
    map.set(9, "九千亿");
    return map.get(num);
}

// 13. 万亿位数
function getHundredBillion(num) {
    const map = new Map([]);
    map.set(0, "零");
    map.set(1, "一万亿");
    map.set(2, "二万亿");
    map.set(3, "三万亿");
    map.set(4, "四万亿");
    map.set(5, "五万亿");
    map.set(6, "六万亿");
    map.set(7, "七万亿");
    map.set(8, "八万亿");
    map.set(9, "九万亿");
    return map.get(num);
}

// 转换
function convert(num) {
    let str = num.toString();
    let len = str.length;
    let result = "";
    switch (len) {
        case 1:
            result = getDigit(str);
            break;
        case 2:
            result = getTen(str);
            break;
        case 3:
            result = getHundred(str);
            break;
        case 4:
            result = getThousand(str);
            break;
        case 5:
            result = getTenThousand(str);
            break;
        case 6:
            result = getHundredThousand(str);
            break;
        case 7:
            result = getMillion(str);
            break;
        case 8:
            result = getTenMillion(str);
            break;
        case 9:
            result = getHundredMillion(str);
            break;
        case 10:
            result = getThousandMillion(str);
            break;
        case 11:
            result = getBillion(str);
            break;
        case 12:
            result = getTenBillion(str);
            break;
        case 13:
            result = getHundredBillion(str);
            break;
        default:
            result = "超出转换范围";
    }
    return result;
}

// 测试
console.log(convert(1234567893));