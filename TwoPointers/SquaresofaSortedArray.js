/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let li = 0, ri = nums.length - 1, result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        let left = Math.abs(nums[li]), right = Math.abs(nums[ri]);

        if (left <= right) { result[i] = right * right; ri--; }
        else if (left > right) { result[i] = left * left; li++; }
    }

    return result;

};