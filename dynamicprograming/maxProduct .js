/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    var n = nums.length;
    if (!n) return 0;
    var curMax = nums[0];
    var curMin = nums[0];
    var max = nums[0];
    for (var i = 1; i < n; i++) {
        var num = nums[i];
        var minProd = curMin * num;
        var maxProd = curMax * num;
        curMax = Math.max(num, minProd, maxProd);
        curMin = Math.min(num, minProd, maxProd);
        max = Math.max(max, curMax);
    }
    return max;
};