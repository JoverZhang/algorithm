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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

//1.dummy head and pointers

// let swapPairs = function (head) {
//     if (!head || !head.next) return head
//     let dummyHead = new ListNode(-1, head)
//     let cur = dummyHead
//     while (cur.next && cur.next.next) {
//         let temp = cur.next.next
//         cur.next.next = temp.next
//         temp.next = cur.next
//         cur.next = temp
//         cur = cur.next.next
//     }
//     return dummyHead.next
// };

// 2.recursion

let swapPairs = function (head) {
    if (!head || !head.next) return head
    let next = head.next
    let newNode = swapPairs(next.next)
    next.next = head
    head.next = newNode
    return next
};

console.log(swapPairs(head))
