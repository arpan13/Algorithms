const threeSum = (nums) => {
    nums.sort(); // O(n log(n)) time
    let result = [];
    // This `i` will be our FIXED value, while the left and right pointers move around
    for (let i = 0; i <= nums.length - 3; i++) {
        // if index > 0 and current number equals previous number
        // We do not want duplicates, and already taken the previous answer
        // Skip this iteration with `continue`
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // nums[i] is fixed, left and right are moving
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const s = nums[i] + nums[left] + nums[right];
            // When sorted, moving from left to right increased sum
            if (s < 0) left += 1;
            // When sorted, moving from right to left decreases sum
            else if (s > 0) right -= 1;
            else {
                // We found three numbers that sum up to target
                result.push([nums[i], nums[left], nums[right]]);
                // Get rid of duplicates
                while (left < right && nums[left] === nums[left + 1]) left += 1;
                // Get rid of duplicates
                while (left < right && nums[right] === nums[right - 1])
                    right -= 1;
                // Our left and right pointers are still on a duplicate , so move one more time
                left += 1;
                right -= 1;
            }
        }
    }

    return result;
};