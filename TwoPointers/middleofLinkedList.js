

/*
Fast pointer will move two steps at a time while slow pointer move one step at a time. 
So when fast pointer reach at the end of the linked list, 
slow pointer will be at the middle of the linked list.
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
          f
1 -> 2 -> 3 -> 4 -> 5
     s
     
2nd loop
                    f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

var middleNode = function (head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};