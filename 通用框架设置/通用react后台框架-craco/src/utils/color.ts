const colorHex = (color: string) => {
    // RGB颜色值的正则
    const reg = /^(rgb|RGB)/;
    if (reg.test(color)) {
        let strHex = '#';
        // 把RGB的3个数值变成数组
        const colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
        // 转成16进制
        for (let i = 0; i < colorArr.length; i += 1) {
            let hex = Number(colorArr[i]).toString(16);
            if (hex === '0') {
                hex += hex;
            }
            strHex += hex;
        }
        return strHex;
    } else {
        return String(color);
    }
};

const colorRgb = (color: string, opacity: number) => {
    // 16进制颜色值的正则
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 把颜色值变成小写
    let color1 = color.toLowerCase();

    if (reg.test(color1)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color1.length === 4) {
            let colorNew = '#';
            for (let i = 1; i < 4; i += 1) {
                colorNew += color1.slice(i, i + 1).concat(color1.slice(i, i + 1));
            }
            color1 = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        const colorChange = [];
        for (let i = 1; i < 7; i += 2) {
            colorChange.push(parseInt(`0x${color1.slice(i, i + 2)}`, 16));
        }

        const opacity1 = opacity > 1 ? 1 : opacity;
        return `RGB(${colorChange.join(',')},${opacity1})`;
    } else {
        return color1;
    }
};

export { colorHex, colorRgb };
