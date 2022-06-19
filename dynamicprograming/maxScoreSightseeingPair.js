/**
The required score is the max value of v[i] + v[j] + i - j => Max(v[i] + v[j] + i - j);
Let's change the equation a bit to Max((v[i] + i) + (v[j] - j)).
So in order to solve this question in one pass over the array, we'll calculate (v[i] + i), (v[j] - j) for each index.
We'll start with the max v[i]+i for each index:
So I'll start with saving v[i]+i for the first element,
But for the second one, instead of saving v[i]+i (because the v[i]+i of the prev element is bigger), I'll save the prev value to here as well.
So basically, in each iteration, we ask: Is v[i]+i of our current index is bigger than the prev value we've calculated?
If yes, for that index we save the v[i]+i, 
If not, we keep the prev value we've already calculated.
Then, we'll calculated and save v[j]+j for each index:
For for the first element, because i should be less than j (i < j), meaning i starts from 0 and j starts from 1, in the first place we'll not have any value,
because we have to have a pair to calculate.
For the next element, we'll add the v[j]-j and so on for every element.
in each iteration we will update our total if we find a bigger one.
The calculation of v[i]+i and v[j]-j can be preformed using a constant variables, therefor our space complexity is constant.
As far as time complexity, we iterate throw the array once, therefor it's linear.

Time complexity: O(n)
Space complexity: O(1)
 */
var maxScoreSightseeingPair = function (v) {
    let n = v.length;
    let res = -1;
    let vipi = v[0]; // v[0]+0

    for (let j = 1; j < n; j++) {
        let vjpj = v[j] - j; // v[j]-j
        res = Math.max(res, vipi + vjpj); // the max of res and v[i]+i and v[j]-j
        vipi = Math.max(vipi, v[j] + j); // we'll update vipi, so that we'll have the maximum so far
    }

    return res;
};