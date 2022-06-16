const maxSubArray = function (nums) {
    // initialize current & max values equal to the value of the first number in nums
    let current = nums[0];
    let max = nums[0];

    // iterate through nums, starting at the second value
    for (let i = 1; i < nums.length; i++) {

        // keep track of the current subArray, discarding and resetting if current is negative
        current = Math.max(nums[i], current + nums[i]);

        // keep track of max subarray by checking to see if current subarray is greater than max
        max = Math.max(current, max);
    }

    return max;
};