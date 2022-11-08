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
let head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            nex1: null
        }
    }
}

let deleteDuplicates = function(head) {
    if(!head) return head
    let cur = head
    while(cur!=null && cur.next != null) {
        if(cur.next.val === cur.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
}

console.log(deleteDuplicates(head))
// console.log(deleteDuplicates([1, 1, 2, 3, 3]))



