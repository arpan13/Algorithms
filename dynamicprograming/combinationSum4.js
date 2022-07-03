/*
Since different sequences are counted as different combinations,
we should get permutations instead of combinations (in permutation, order matters)

Use DFS to get all possible permutations but we can revisit a node and also we do not keep
track of the path but just the sum of numbers in the path
*/
var combinationSum4 = function (nums, target) {
    return dfsTraversal(nums, target, new Map());
};

const dfsTraversal = (nums, remaining, memo) => {
    let count = 0;
    if (remaining === 0) {
        return 1;
    }
    if (memo.has(remaining)) {
        return memo.get(remaining);
    }
    for (let i = 0; i < nums.length; i++) {
        if (remaining - nums[i] >= 0) {
            count += dfsTraversal(nums, remaining - nums[i], memo);
        }
    }
    memo.set(remaining, count);
    return count;
}

//*w/ Top-Down DP:
var combinationSum4 = function (N, T) {
    let dp = new Uint32Array(T + 1)
    dp[0] = 1
    for (let i = 1; i <= T; i++)
        for (let num of N)
            if (num <= i) dp[i] += dp[i - num]
    return dp[T]
};
//*w/ Bottom-Up DP:
var combinationSum4 = function (N, T) {
    let dp = new Uint32Array(T + 1)
    dp[0] = 1
    for (let i = 0; i < T; i++) {
        if (!dp[i]) continue
        for (let num of N)
            if (num + i <= T) dp[i + num] += dp[i]
    }
    return dp[T]
};