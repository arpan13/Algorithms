/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (num) {
    if (!num) return false;
    while (num > 1) {
        if (num % 2 == 0) num /= 2;
        else if (num % 3 == 0) num /= 3;
        else if (num % 5 == 0) num /= 5;
        else return false;
    }
    return num == 1;
    // To check if a number is ugly, we keep dividing it by either 2,3 or 5
    // until it becomes 1. If it cannot become 1 (no more divisible by 2,3 or 5),
    // then return false;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};