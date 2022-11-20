/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//1. Set: requires more space

// let getIntersectionNode = function (headA, headB) {
//     let set = new Set()
//     while (headA){
//         set.add(headA)
//         headA = headA.next
//     }
//     while (headB){
//         if (set.has(headB)) return headB
//         headB = headB.next
//     }
//     return headB
// }

// 2. Two pointers

let getIntersectionNode = function (headA, headB) {
    let pA = headA
    let pB = headB
    while (pA !== pB) {
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }
    return pB
};
