// 不定长二维数组的全排列
// 例如：[[1,2],[3]]
// 输出：[[1,3],[2,3]]
// 1. 递归
function permute(arr) {
  let res = [];
  let temp = [];
  function helper(arr, temp) {
    if (arr.length === 0) {
      res.push(temp);
    } else {
      for (let i = 0; i < arr[0].length; i++) {
        helper(arr.slice(1), temp.concat(arr[0][i]));
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
        for (let k = 0; k < arr[i].length; k++) {
            temp.push(res[j].concat(arr[i][k]));
        }
        }
        res = temp;
    }
    return res;
}

// 测试
console.log(permute([[1, 2], [3]])); // [[1,3],[2,3]]
console.log(permute1([[1, 2], [3]])); // [[1,3],[2,3]]