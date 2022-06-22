/**
 * The idea
A few key facts we have to understand:

The question is simply asking the sum of different combinations of BST if every number between 1 - n is used as a root node
If number i is the root node, then the total combinations for i will equal to the combination of BST to its left [1... i-1] times the combination of BST to its right [i+1]...n.
Think of BST are just combination of nodes instead of actual numbers, this means, the BST combinations for [1,2,3,4] equals to the BST combinations for [7,8,9,10] because they all have 4 elements.
When we calculate the product of left & right, we are mix and match different combinations of BST. And we don't really care what are the actual numbers are, but instead, the length of the elements we are dealing with.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
};