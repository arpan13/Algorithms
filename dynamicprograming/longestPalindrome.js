/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let dp = [];
    let result = "";
    for (let end = 0; end < s.length; end++) {
        if (!dp[end]) dp[end] = [];
        for (let start = 0; start <= end; start++) {
            if (start == end) {
                dp[end][start] = true;
            } else if (end - start > 1) {
                dp[end][start] = s[end] == s[start] && dp[end - 1][start + 1];
            } else {
                dp[end][start] = s[end] == s[start]
            }

            if (dp[end][start]) {
                if ((end - start + 1) > result.length) {
                    result = s.substring(start, end + 1);
                }
            }
        }
    }
    return result;
};