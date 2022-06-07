const countPaths = (n) => {
    let dp = [];
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            dp[i] = d[i - 1];
        } else if (i == 2) {
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }

    }
    return dp[n];
}