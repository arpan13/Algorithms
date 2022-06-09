/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else if (map[nums[i]]) {
            map[nums[i]] += 1;
        }
    }

    for (const key in map) {

        if (map[key] == 1) {
            return key;
        }
    }

    return null;
}; 