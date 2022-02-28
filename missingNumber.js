
// https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let totalNum= nums.length
    let totSum = totalNum*(totalNum+1)/2
    let numSum = nums.reduce((a,b)=> a+b)
    return totSum -numSum
    
};
