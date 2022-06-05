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
//*without recursion
var reverseList = function (head) {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;

};

//*with recursion

var reverseList = function (head) {
    return recursiveHelper(null, head)

    function recursiveHelper(prev, curr) {
        // base case
        if (!curr) return prev
        // preserve next pointer as we will be changing it soon
        const newNext = curr.next
        // change next pointer to prev to reverse it
        curr.next = prev

        // curr becomes prev and we move to next node with preserved newNext
        return recursiveHelper(curr, newNext)
    }
};

