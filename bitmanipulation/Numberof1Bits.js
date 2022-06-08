/**
 * Unsigned right shift (>>>)
The unsigned right shift operator (>>>) (zero-fill right shift) shifts the first operand 
the specified number of bits to the right.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let sum = 0;

    while (n != 0) {
        sum += n & 1;
        n = n >>> 1;
    }

    return sum;
};
