/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let temp = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === temp) {
            nums.splice(i, 1);
            i--;
        } else {
            temp = nums[i];   
        }
    }
    return nums;
};