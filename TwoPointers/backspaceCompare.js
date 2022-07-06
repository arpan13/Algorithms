/**
 * @param {string} s
 * @return {string}
 */
const process = s => {
    const res = [];
    for (x of s.split('')) {
        x === '#' ? res.pop() : res.push(x);
    }
    return res.join('')
}
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = (S, T) => process(S) == process(T);