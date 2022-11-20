/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//1. rely on different pointers

//the first version

// let reverseList = function (head) {
//     if (!head || !head.next) return head
//     let pre = null
//     while (head) {
//         let cur = head
//         let temp = cur.next
//         cur.next = pre
//         head = temp
//         pre = cur
//     }
//     head = pre
//     return head
// };

//the second version

// let reverseList = function (head) {
//     if (!head || !head.next) return head
//     let pre = null
//     let cur = head
//     while (cur) {
//         let temp = cur.next
//         cur.next = pre
//         pre = cur
//         cur = temp
//     }
//     return pre
// };

//2.with the help of recursion

let reverseList = function (head) {
    return reverse(head, null)
};

let reverse = function (cur, pre){
    if (!cur) return pre
    let temp = cur.next
    cur.next = pre
    return reverse(temp, cur)
}
