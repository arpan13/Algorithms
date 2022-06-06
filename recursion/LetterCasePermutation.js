/**
 * Idea:

When the problem asks us to deal with permutations, one of the obvious approaches is via recursion because recursion will allow us to fire off our helper function down each branching possibility.

Recursion also naturally favors a DFS approach, which is also good because it ensures that our recursion stack never gets too deep.

Our recursive helper function (dfs) is actually quite simple. If we start with the input string (S) fully lowercased, then we just need to make sure that each version of dfs calls itself down two branches: one in which the current character is left unchanged, and a second in which the character has been uppercased, but only if the character is a letter.

Then, whenever we reach the end of S, we can add the permutation to our answer array (ans).
 */

var letterCasePermutation = function (S) {
    S = S.toLowerCase()
    let len = S.length, ans = []
    const dfs = (i, res = '') => {
        if (i < len) {
            dfs(i + 1, res + S[i])
            if (S[i] >= 'a') dfs(i + 1, res + S[i].toUpperCase())
        } else ans.push(res)
    }
    dfs(0)
    return ans
};