/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//1. solve the problem with the help of Set, it takes more space

// let detectCycle = function (head) {
//     let pointer = head
//     let S = new Set()
//     while (pointer) {
//         if (S.has(pointer)) {
//             return pointer
//         }else {
//             S.add(pointer)
//         }
//         pointer = pointer.next
//     }
//     return null
// }

//2. solve the problem using pointers

let detectCycle = function (head) {
    if (!head || !head.next) return null
    let fast = head
    let slow = head
    const hasCycle = head => {
        while (fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if (fast === slow) return true
        }
        return false
    }

    while (hasCycle(head)) {
        slow = head
        while (slow !== fast){
            slow = slow.next
            fast = fast.next
        }
        return slow
    }

    return null
};
