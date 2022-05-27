/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns index
 */

//*Recursion method
var search = function (nums, target) {

    let l = 0;
    let r = nums.length - 1;


    function recursionSearch(nums, l, r, target) {
        if (l <= r) {
            let mid = l + Math.floor((r - l) / 2);

            if (nums[mid] == target) return mid;

            if (nums[mid] > target) return recursionSearch(nums, l, mid - 1, target);

            return recursionSearch(nums, mid + 1, r, target);
        }
        return -1;
    }
    return recursionSearch(nums, l, r, target);

}


console.log(search([-1, 0, 3, 5, 9, 12], 9))

//*Normal approch

var search = function (nums, target) {
    let start = 0, end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
};