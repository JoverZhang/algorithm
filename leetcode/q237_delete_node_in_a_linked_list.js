/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

//The variable node is the node in a linked list which need to be deleted, but you can not get its previous node

let deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};
