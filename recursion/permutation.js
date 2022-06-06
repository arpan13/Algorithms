//approach: backtracking (DFS)
//basic template of backtracking would be to loop, choose, explore and unchoose
//loop: you want to iterate over all the numbers so that you can find it's possible values
//choose: you start with the index value(the 0th index number), so that you can find the next combined possible values for the 0th value
//explore: basically recursion to add all the next values to the 0th value
//unchoose: you pop the value (nth -1 value), so then you can now start with other value add to that 0th value
var permute = function (nums) {
    let resultArray = new Array();

    function helper(nums, permutedValueArr) {

        if (nums.length == 0) {
            resultArray.push([...permutedValueArr]);  //push the copy of the permuted array 
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            //choose
            permutedValueArr.push(nums[i]); //0th value

            let decreasedNums = nums.filter((n, index) => index != i);

            //explore
            helper(decreasedNums, permutedValueArr);   //passing in the new decreased nums array
            console.log(permutedValueArr);
            //unchoose
            permutedValueArr.pop();  //start removing the elements from the last so you can make possible combinations of values with that 0th value 
            console.log(permutedValueArr);
        }


    }

    helper(nums, new Array());

    return resultArray;
};

console.log(permute([1, 2, 3]))