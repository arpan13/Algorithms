/**
 * @param {number[]} nums
 * @return {number}
 */
var minjump = function (nums) {
    //jump[i] is the jumps required to reach from first element of array to i'th position
    const jump = new Array(nums.length).fill(Infinity);
    jump[0] = 0; //Since we are already at index 0 initially

    //Outer loop to calculate & store minimum jumps to  reach position i
    for (let i = 1; i < nums.length; i++) {
        /** Inner loop will run from 0'th index to i-1 index, We need to figure out
        * if we can jump directly from j'th position to i'th position, 
        * if we can, then minimum jump to reach index i will be minimum of jump[i], jump[j]+1
        * Here "+1" in "jump[j] + 1" is for one more jump from j'th index
        **/
        for (let j = 0; j < i; j++) {
            if (nums[j] >= i - j) {
                jump[i] = Math.min(jump[i], jump[j] + 1);
            }
        }
    }
    return jump[nums.length - 1];
}