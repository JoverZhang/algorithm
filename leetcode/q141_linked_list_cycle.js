/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//1. Two Pointers, if there is a  cycle in linked list, two pointers will meet somewhere

// let hasCycle = function(head) {
//     if (!head) return false
//     let fast = head
//     while (fast && fast.next){
//         head = head.next
//         fast = fast.next.next
//         if (fast === head) return true
//     }
//     return false
// };

//2. Hash Table

let existed = new Set()
let hasCycle = function(head) {
    if (!head) return false
    while (head){
        if (existed.has(head)) return true
        existed.add(head)
        head =head.next
    }
    return false
};
