/**
 * This is one of the problems taken directly from a farily well known algorithm.

Minimum edit distance / Levenshtein Distance
What are the minimal # of edits (change, add, delete char) to convert 1 string to another
It's a DP problem, looking at a character at a time.

For each chacter, you either don't need to change it, you need to delete it, or you need to change it.
Keep doing that character after character for each possibility and since we are interested in the minimum number of changes, just keep track of the lowest #.

Take a look at this great visual explanation:
https://www.youtube.com/watch?v=We3YDTzNXEk
 */

var minDistance = function (word1, word2) {
    let dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1)); // Get our DP matrix setup, no need for default values since we'll be filling each each of them

    for (let r = 0; r <= word1.length; r++) {
        for (let c = 0; c <= word2.length; c++) {
            if (r == 0) dp[0][c] = c; // here we setup the initial row
            else if (c == 0) dp[r][0] = r; // here the initial column
            else if (word1[r - 1] == word2[c - 1]) //now, if the letter is the same, cost is the same as the upper left cost
                dp[r][c] = dp[r - 1][c - 1];
            else //letters are different, so we will either need to change or delete one of the letters so prev cost +1 operation
                dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c - 1], dp[r - 1][c]) + 1;
        }
    }
    return dp[word1.length][word2.length]; //return the cost at the end of the string
};