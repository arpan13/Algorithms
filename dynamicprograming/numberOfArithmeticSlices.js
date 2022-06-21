var numberOfArithmeticSlices = function (A) {
    let count = 0;

    for (let i = 0; i < A.length - 2; i++) {
        for (let j = i + 2; j < A.length; j++) {
            const diffA = A[j - 1] - A[j - 2];
            const diffB = A[j] - A[j - 1];

            if (diffA === diffB) {
                count++;
            } else {
                break;
            }
        }
    }

    return count;
}

/**
 * Requirements

A minimum of 3 elements is needed to make a slice
A slice can be 3 or more elements, and each additional element counts as a unique slice
Dynamic Programming is the act of using a previous sub-problem to find a new sub-problems solution. Let's take the following example into account.

[1, 2, 3, 4] ---> [1,2,3], [2,3,4], [1,2,3,4]] ---> 3

We can visually see that the above array has 3 slices, but it's important to notice that [1,2,3,4] is an extension of [1,2,3]

Now let's try this with some DP. First, we need to allocate an array the size of our input, and fill it with zeroes. Afterwards, we are to start from an index, and check to see if the difference between two elements is the same.

Step 1
A = [1, 2, 3, 4]
dp = [0, 0, 0, 0]

Step 2
A = [1, 2, 3, 4]
dp = [0, 0, 1, 0]
We get a 1 here, because the difference between 1 and 2, and 2 and 3 are the same. So we know this solution for this subproblem is one.

Step 2
A = [1, 2, 3, 4]
dp = [0, 0, 1, 2]
Now this is the kicker. For this last index, we know [1,2,3,4] is an extension of [1,2,3], but [2,3,4] is also it's own arithmetic slice. This 2 comes from the extension of [1,2,3], but also the unique sub-slice of [2,3,4]. dp[i] = 1 + dp[i - 1]; is summing the previous subproblem (where we got 1), but also adding an additional 1 for the [2,3,4] we have found.
 */

var numberOfArithmeticSlices = function (A) {
    let sum = 0,
        dp = Array(A.length).fill(0);

    for (var i = 2; i <= dp.length - 1; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            dp[i] = 1 + dp[i - 1];
            sum += dp[i];
        }
    }

    return sum;
};