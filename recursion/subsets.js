function subsets(nums) {
    const powerset = [];
    generatePowerset([], 0);

    function generatePowerset(path, index) {
        powerset.push(path);
        for (let i = index; i < nums.length; i++) {
            generatePowerset([...path, nums[i]], i + 1);
        }
    }

    return powerset;
}


var subsets = function (nums) {
    let res = []                    // the final arr, which we will display
    let auxArr = [], i = 0             // global vars

    function recur(nums, i, auxArr) {
        if (i == nums.length) { res.push(auxArr); return } //operation of recursion will be upto i=n-1
        // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)

        // take it
        recur(nums, i + 1, [...auxArr, nums[i]]) //or, we can use 'aux.concat(nums[i])'

        // dont take
        recur(nums, i + 1, auxArr)

    }

    recur(nums, i, auxArr) // passing the global variable declared already
    return res        // rerturn the final 2d arr


};


var subsets = function (nums) {
    let res = [[]], appendarr = []

    for (let num of nums) {
        appendarr = []
        for (let entry of res) {
            appendarr.push([...entry, num])
        }

        res.push(...appendarr)
    }

    return res

};
