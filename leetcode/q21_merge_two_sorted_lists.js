/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let l1 = {
    val: 1,
    next: null
}

let l2 = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

//1. recursion: high time complexity

// let mergeTwoLists = function (list1, list2) {
//     if (!list1) return list2
//     if (!list2) return list1
//     let mergeList
//     if (list1.val < list2.val){
//         mergeList = new ListNode(list1.val)
//         mergeList.next = mergeTwoLists(list1.next, list2)
//         console.log(1+1)
//     } else {
//         mergeList = new ListNode(list2.val)
//         mergeList.next = mergeTwoLists(list2.next, list1)
//         console.log(1+2)
//     }
//     return mergeList
// }

//2. it takes more space (space complexity)

let mergeTwoLists = function (list1, list2) {
    let mergeList = new ListNode()
    let dummy = mergeList
    while (list1 && list2) {
        if (list1.val > list2.val) {
            mergeList.next = new ListNode(list2.val)
            list2 = list2.next
        } else {
            mergeList.next = new ListNode(list1.val)
            list1 = list1.next
        }
        mergeList = mergeList.next
    }
    if (!list1) {
        mergeList.next = list2
    }
    if (!list2) {
        mergeList.next = list1
    }
    return dummy.next
}

console.log(mergeTwoLists(l1, l2))
