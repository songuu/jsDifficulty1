/* 

给定两个用链表表示的整数，每个节点包含一个数位。

这些数位是反向存放的，也就是个位排在链表首部。

编写函数对这两个整数求和，并用链表形式返回结果。

 

示例：

输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?

示例：

输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let head1 = l1;
  let head2 = l2;
  let retList = new ListNode(-1);
  let cur = retList;
  let carry = 0;
  let num1 = 0,
    num2 = 0,
    tempVal = 0;

  while (head1 !== null || head2 !== null || carry > 0) {
    num1 = head1 ? head1.val : 0;
    num2 = head2 ? head2.val : 0;
    tempVal = (num1 + num2 + carry) % 10;
    carry = num1 + num2 + carry >= 10 ? 1 : 0;

    cur.next = new ListNode(tempVal);
    cur = cur.next;
    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }

  return retList.next;
};

var addTwoNumbers1 = function (l1, l2) {
  const l3 = new ListNode(-1);

  let [h1, h2, h3] = [l1, l2, l3];

  let carry = 0;

  while (p1 || p2) {
    const val1 = p1 ? p1.val : 0;
    const val2 = p2 ? p2.val : 0;

    const total = val1 + val2 + carry;

    carry = Math.floor(total / 10);

    h3.next = new ListNode(carry % 10);

    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
    p3 = p3.next;
  } 

  if(carry > 0) {
      h3.next = new ListNode(carry)
  }

  return h3.next
};


const addTwoNumbers2 = (l1, l2) => {
    // 创建新链表
    const l3 = new ListNode(-1);
    // 定义三个链表的指针
    let [p1, p2, p3] = [l1, l2, l3];
    // 进位，初始0
    let c = 0;
    while (p1 || p2) {
        // 取出l1、l2当前节点的值，若遍历完了，则赋值为0
        const val1 = p1 ? p1.val : 0;
        const val2 = p2 ? p2.val : 0;
        // 计算和
        const val = val1 + val2 + c;
        // 更新进位
        c = Math.floor(val / 10);
        // 更新l3的节点
        p3.next = new ListNode(val % 10);
        p1 = p1?.next;
        p2 = p2?.next;
        p3 = p3.next;
    }
    // 如果进位还有，加到l3最后
    if (c) p3.next = new ListNode(c);
    return l3.next;
};