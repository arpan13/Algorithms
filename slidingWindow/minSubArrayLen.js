/**
 * The idea
Set two pointers left and right, where right - left + 1 will be the length of valid subarray
Keep expanding right pointer, when the condition is met sum >= s, start shrinking left to find the minimum length of subarray
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if (nums.length == 0) return 0;
    let left = 0, right = 0, sum = 0, min = Infinity;
    while (right != nums.length) {
        sum += nums[right];

        while (sum >= s) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }

        right++;
    }
    if (min == Infinity) return 0;
    return min;
};