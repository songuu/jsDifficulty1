const eps = 1e - 4
const transformRPX = window.__transformRpx__ || function (number, deviceWidth) {
    // 0rpx === 0px
    if(number === 0) return 0; 

    // 新值 = rpx值 / 基础设备的宽度 * 设备的宽度
    number = number /  BASE _DEVICE_WIDTH * (newDeviceWidth || deviceWidth)

    // 返回小于等于number + 0.001 精度收拢
    number = Math.floor(number + eps)

    if(number === 0) {
        if(deviceDPR === 1 || !isIOS) { // 主要是用于在ios6上面的显示判断
            return 1
        } else {
            return 0.5
        }
    } 

    return number
}