function canJump(nums) {
    //Approach 3: Dynamic Programming Bottom-up
    let n = nums.length - 1;

    let dp = Array(n).fill('Bad Index');

    dp[n] = 'Good Index';

    for (let i = nums.length - 2; i >= 0; i--) {
        let furthestJump = Math.min(i + nums[i], n);

        for (let j = i + 1; j <= furthestJump; j++) {
            if (dp[j] === 'Good Index') {
                dp[i] = 'Good Index';
                break;
            }
        }
    }

    return dp[0] === 'Good Index';
}