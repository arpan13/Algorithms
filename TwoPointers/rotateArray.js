var rotate = function (nums, k) {
    if (nums.length < k) k = k % nums.length;

    const temp = nums.splice(nums.length - k, k);
    nums.unshift(...temp);

    return nums
};


var rotateSecond = function (nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

    let swap = (i, j) => {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    let reverse = function (i, j) {
        while (i < j) {
            swap(i, j);
            i++
            j--
        }
    } // suppose  ----->---> 
    reverse(0, nums.length - 1); // reverse   <--<------
    reverse(0, k - 1) // reverse first part ---><----
    reverse(k, nums.length - 1)// reverse second part --->----->

};