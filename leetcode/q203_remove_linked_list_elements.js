/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
    }
}

//1.solve the problem without using dummy head

// let removeElements = function (head, val) {
//     while (head && head.val === val) {
//         head = head.next
//     }
//     let cur = head
//     while (cur && cur.next) {
//         if (cur.next.val === val) {
//             cur.next = cur.next.next
//         } else {
//             cur = cur.next
//         }
//     }
//     return head
// };

// 2.solve the problem with the help of dummy head

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let removeElements = function (head, val) {
    let dummyHead = new ListNode(-1, head)
    head = dummyHead
    while (dummyHead.next){
        if (dummyHead.next.val === val){
            dummyHead.next = dummyHead.next.next
        } else {
            dummyHead = dummyHead.next
        }
    }
    return head.next
};

console.log(removeElements(head, 2))
