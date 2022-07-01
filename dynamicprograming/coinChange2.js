var change = function (amount, nums) {
    const m = nums.length;
    const n = amount;
    const dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
        dp[i][0] = 1;
    }

    for (let i = 1; i <= m; i++) {
        const num = nums[i - 1];
        for (let j = 1; j <= n; j++) {
            dp[i][j] += dp[i - 1][j];
            if (num <= j) {
                dp[i][j] += (dp[i][j - num]);
            }
        }
    }

    return dp[m][n];
};