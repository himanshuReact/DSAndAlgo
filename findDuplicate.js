// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let numSum = nums.reduce((a,b)=> a+b)
    let maxNum = nums.length-1
    
    let result = numSum - (maxNum+1)*maxNum/2
    return result
};
