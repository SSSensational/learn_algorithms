const LinkedList = require('../../../data_structures/singly_linked_list');

function mergeArr(left, right) {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) res.push(left.shift());
        else res.push(right.shift());
    }
    return res.concat(left, right);
}

function sort1(arr) {
    const len = arr.length;
    if (len <= 1) return arr;
    return mergeArr(sort1(arr.splice(0, len >> 1)), sort1(arr));
}



function toLinkedList(arr) {
    const arrList = new LinkedList(arr);
    arrList.head = sort2(arrList.head)
    return arrList.toArr();
}

function mergeLinkedList(left, right) {
    const head = left.data <= right.data ? left : right;
    let temp = {};
    while (left && right) {
        if (left.data <= right.data) {
            temp.next = left;
            left = left.next;
        } else {
            temp.next = right;
            right = right.next;
        }
        temp = temp.next;
    }
    if (left) temp.next = left;
    if (right) temp.next = right;
    return head;
}

function sort2(head) {
    if (!head || !head.next) return head;
    let slow = fast = pre = head;
    while (fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return mergeLinkedList(sort2(head), sort2(slow));
}

module.exports = {
    merge1: sort1,
    merge2: toLinkedList,
}
