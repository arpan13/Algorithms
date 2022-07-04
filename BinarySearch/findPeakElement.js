var findPeakElement = function (A) {
    if (A.length == 1) return 0;
    let left = 0, right = A.length - 1, mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (mid == 0 && A[mid] > A[mid + 1]) return mid;
        else if (mid == A.length - 1 && A[mid] > A[mid - 1]) return mid;
        else if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) return mid;
        else if (A[mid] < A[mid - 1]) right = mid - 1;
        else if (A[mid] < A[mid + 1]) left = mid + 1;
    }
    return -1;
};
/*
Some edge cases:
If the input array is sorted in strictly increasing order, the last element is the only peak element.
If the input array is sorted in strictly decreasing order, the first element is the only peak element.

[1,2,3,4] => 3
[4,3,2,1] => 0
[1,4,2,1,5] => 1 or 4

Idea - Binary Search:
1. We compare the middle element with its neighbours. 
If it is greater than both neighbours, we return it.
If it is less than its left neighbour, we search the left half because there must be a peak in the left half.
- 1st case: the left neighbour could be the corner element and therefore the peak.
- 2nd case: our left neighbour's left neighbour is less than our left neighbour and therefore our left neighbour is the peak.
- 3rd case: our left neighbour's left neighbour is greater than our left neighbour. 
In this case, the above possibilities apply to that left neighbour again.
So, there must be a peak element in the left half.

If it is less than its right neighbour, we search the right half because there must be a peak in the right half.
- 1st case: the right neighbour could be the corner element and therefore the peak.
- 2nd case: our right neighbour's right neighbour is less than our right neighbour and therefore our right neighbour is the peak.
- 3rd case: our right neighbour's right neighbour is greater than our right neighbour. 
In this case, the above possibilities apply to that right neighbour again.
So, there must be a peak element in the right half.

Time Complexity: O(log(n))
Space Complexity: O(1)
*/