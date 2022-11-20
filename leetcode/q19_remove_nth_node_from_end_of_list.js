/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1, head)
    let fast = dummy
    let slow = dummy
    while (n--) fast = fast.next
    while (fast.next){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
};
