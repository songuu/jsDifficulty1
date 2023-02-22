/* Function.prototype.apply = function (context, args) {
    // 宿主
    // 传入的参数是数组
    if(typeof this !== 'function') {
        throw new TypeError('类型错误')
    }

    const fn = Symbol('fn')

    context[fn] = this

    const res = context[fn](...args)

    delete context[fn]

    return res
} */

const a = function (aa) {
  // console.log(aa)
};

a.apply(null, [1]);

a.call(null, 1);

a.bind(null, 1)();

let arr = [
  0,
  "a",
  1,
  "b",
  2,
  "c",
  3,
  "e",
  2,
  "d",
  1,
  "x",
  1,
  "y",
  2,
  "z",
  0,
  "ff",
];

function deserialization(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i += 2) {}
}

/*
 * 归并
 * 1. 首先折半
 * 2. 分区计算合并
 *
 */
const merger = (nums, k) => {
  const mergeSort = (a, l, r) => {
    if (l >= r) return;

    const m = (l + r) >> 1;
    mergeSort(a, l, m);
    mergeSort(a, m + 1, r);
    merge(a, l, m, r);
  };

  const merge = (a, l, m, r) => {
    const temp = new Array(r - l + 1);
    let i = l,
      j = m + 1,
      k = 0;

    // 比较小数组 放入大数组中
    while (i <= m && j <= r) temp[k++] = a[i] > a[j] ? a[i++] : a[j++];
    // 右侧小数组已排序完毕，左侧小数组还有剩余，将左侧小数组元素依次放入大数组尾部
    while (i <= m) temp[k++] = a[i++];
    // 左侧小数组已排序完毕，右侧小数组还有剩余，将右侧小数组元素依次放入大数组尾部
    while (j <= r) temp[k++] = a[j++];

    for (let p = 0; p < temp.length; p++) a[l + p] = temp[p];
  };

  mergeSort(nums, 0, nums.length - 1);

  console.log(nums);

  return nums[k - 1];
};

/*
 * 快排
 * 1.
 *
 *
 */
function quickSort(arr, targetIndex, start) {
  if (arr.length <= 1) return arr[0];
  let left = [];
  let right = [];
  const mid = (arr.length / 2) >> 1;
  const midNum = arr[mid];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > midNum) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  if (left.length + start === targetIndex) {
    return midNum;
  } else if (left.length + start > targetIndex) {
    return quickSort(left, targetIndex, start);
  } else {
    return quickSort(right, targetIndex, left.length + start + 1);
  }
}

/*
 *
 *
 *
 */
const swapSort = (arr, k) => {
  let findKthLargest = function (nums, k) {
    // 从 nums 中取出前 k 个数，构建一个小顶堆
    let heap = [,],
      i = 0;
    while (i < k) {
      heap.push(nums[i++]);
    }

    buildHeap(heap, k);

    // 从 k 位开始遍历数组
    for (let i = k; i < nums.length; i++) {
      if (heap[1] < nums[i]) {
        // 替换并堆化
        heap[1] = nums[i];
        heapify(heap, k, 1);
      }
    }
    // 返回堆顶元素
    return heap[1];
  };

  // 原地建堆，从后往前，自上而下式建小顶堆
  let buildHeap = (arr, k) => {
    if (k === 1) return;
    // 从最后一个非叶子节点开始，自上而下式堆化
    for (let i = Math.floor(k / 2); i >= 1; i--) {
      heapify(arr, k, i);
    }
  };

  // 堆化
  let heapify = (arr, k, i) => {
    console.log(arr, k, i)
    // 自上而下式堆化
    while (true) {
      let minIndex = i;
      if (2 * i <= k && arr[2 * i] < arr[i]) {
        minIndex = 2 * i;
      }
      if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
        minIndex = 2 * i + 1;
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
        i = minIndex;
      } else {
        break;
      }
    }
  };

  // 交换
  let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  return findKthLargest(arr, k);
};

const b = [1, 2, 3, 4, 5, 10, 7, 8, 9, 6];

console.log(swapSort(b, 3));
