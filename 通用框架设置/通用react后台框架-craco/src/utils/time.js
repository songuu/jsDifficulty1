import moment from 'moment';

export const formatTime = (timeStr, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
  if (!timeStr || timeStr === '0001-01-01T00:00:00Z') {
    return '';
  }
  // 如果是utc时间
  if (timeStr.indexOf('T') > 1) {
    return moment(moment.utc(timeStr).toDate()).format(formatStr);
  }
  return moment(timeStr).format(formatStr);
};

export const getFullTimeArr = (timeRang, addType = 'd', format = 'M-D') => {
  let first = moment(timeRang[0]).startOf('D').valueOf();
  let last =
    addType === 'd'
      ? moment(timeRang[1]).startOf('D').valueOf()
      : moment(timeRang[1]).endOf('D').valueOf() + 1;
  const dates = [];
  if (addType === 'h' && moment().valueOf() < last) {
    last = moment().valueOf();
  }
  while (first <= last) {
    dates.push({
      time: moment(first).valueOf(),
      str: moment(first).format(format),
    });
    first = moment(first).add(1, addType);
  }
  return dates;
};

export const getTimeString = (times, type, timeRange, week = '') => {
  let time = times;
  let str = '';
  const dates = [];
  if (!time) return { str };
  const date = type === 'h' ? moment(time).add(8, 'h') : moment(time);
  switch (type) {
    case 'h':
      str = date.format('MMMDo HH:mm');
      break;
    case 'd':
      str = date.format('MMMDo');
      break;
    case 'w':
      str = `第${week}周`;
      let useSunday = false;
      if (time < timeRange[0]) {
        time = timeRange[0];
      }
      const weekOfday = moment(time).format('E');
      const sunday = moment(time)
        .add(7 - weekOfday, 'days')
        .endOf('day'); // 周日日期
      if (sunday.valueOf() <= timeRange[1] && weekOfday === '1') {
      } else {
        if (sunday.valueOf() <= timeRange[1] && sunday.valueOf > timeRange[0])
          useSunday = true;
        else useSunday = false;
        let num = 0;
        let addDate = moment(time).add(num, 'd').endOf('day');
        const targetTime = useSunday ? sunday.valueOf() : timeRange[1];
        const strArr = [];
        while (addDate.valueOf() <= targetTime) {
          dates.push(addDate.format('MMMDo'));
          strArr.push(addDate.format('MMMDo'));
          num += 1;
          addDate = moment(time).add(num, 'd');
        }
      }
      break;
    default:
      break;
  }
  return { str, realTime: time, dates };
};

export const timeFormat = data => {
  let time = data;
  if (data < 60) {
    return `${Math.round(data)}秒`;
  }

  time = moment.duration(time, 's');
  let day = '';
  let hour = '';
  let minute = '';
  let second = '';
  if (time.days()) {
    day = `${time.days()}天`;
  }
  if (time.hours()) {
    hour = `${time.hours()}小时`;
  }
  if (time.minutes()) {
    minute = `${time.minutes()}分`;
  }
  if (time.seconds()) {
    second = `${time.seconds()}秒`;
  }

  return day + hour + minute + second;
};
