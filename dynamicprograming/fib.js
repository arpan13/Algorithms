/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

/**
 * Binet's formula for the n'th Fibonacci number:

Binet's Formula

This formula can compute the solution in O(1) time as well as O(1) space.
 */

var fib = function (n) {
    let sqrt5 = Math.sqrt(5)
    return (Math.pow(1 + sqrt5, n) - Math.pow(1 - sqrt5, n)) / Math.pow(2, n) / sqrt5
};