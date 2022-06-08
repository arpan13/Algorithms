/**
 * @param {number} n
 * @return {boolean}
 */

const isPowerOfTwo = (n) => n === 1 ? true : n % 2 === 0 && n !== 0 ? isPowerOfTwo(n / 2) : false;