// 数组转树结构
// 1. 递归
function arrayToTree(arr) {
  let res = [];
  arr.forEach((item) => {
    if (item.parentId === 0) {
      res.push(item);
    } else {
      findParent(res, item);
    }
  });
  return res;
}

function findParent(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === item.parentId) {
      arr[i].children = arr[i].children || [];
      arr[i].children.push(item);
    } else {
      findParent(arr[i].children, item);
    }
  }
}

// 2. 循环
function arrayToTree1(arr) {
  let res = [];
  let map = {};
  arr.forEach((item) => {
    map[item.id] = item;
  });
  arr.forEach((item) => {
    let parent = map[item.parentId];
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(item);
    } else {
      res.push(item);
    }
  });
  return res;
}

const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];

console.log(JSON.stringify(arrayToTree1(arr)));
