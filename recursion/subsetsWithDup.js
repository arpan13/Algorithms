var subsetsWithDup = function (nums) {

    nums = nums.sort((a, b) => a - b);

    const res = [];

    function fn(length, start = 0, arr = []) {
        if (arr.length === length) {
            res.push(arr.slice());
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (i !== start && nums[i - 1] === nums[i]) continue;
            arr.push(nums[i]);
            fn(length, i + 1, arr);
            arr.pop();
        }
    }

    for (let length = 0; length <= nums.length; length++) {
        fn(length);
    }

    return res;
};