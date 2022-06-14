/**
 * As the last house is connected back to first house in a circular way, we cannot have a loot which involves both first house and last house. So, we can split the problem into 2 parts:
1. To start from house1 and go till house n-1 (last house - 1)
2. To start from house2 and go till house n (last house)
and then take the maximum of the two loots and return.
 */

var rob = function (nums) {
    let n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1])

    let dp1 = new Array(n);
    let dp2 = new Array(n);

    computeResult(0, n - 2, dp1, nums);
    computeResult(1, n - 1, dp2, nums);

    function computeResult(i, n, dp, nums) {
        dp[i] = nums[i]
        dp[i + 1] = Math.max(dp[i], nums[i + 1])

        for (let j = i + 2; j <= n; j++) {
            dp[j] = Math.max(dp[j - 1], dp[j - 2] + nums[j])
        }
    }
    return Math.max(dp1[n - 2], dp2[n - 1])
};