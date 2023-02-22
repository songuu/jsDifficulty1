// 一维数组全排列
// 1. 递归
function permute(arr) {
  let res = [];
  let temp = [];
  function helper(arr, temp) {
    if (arr.length === 0) {
      res.push(temp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        helper(arr.slice(0, i).concat(arr.slice(i + 1)), temp.concat(arr[i]));
      }
    }
  }
  helper(arr, temp);
  return res;
}

// 2. 循环
function permute1(arr) {
  let res = [[]];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < res.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (!res[j].includes(arr[k])) {
          temp.push(res[j].concat(arr[k]));
        }
      }
    }
    res = temp;
  }
  return res;
}

// 测试
console.log(permute([1,2,3]))