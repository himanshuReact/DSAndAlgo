//  https://leetcode.com/problems/contains-duplicate/submissions/
//  one of best optimised
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 1

var containsDuplicate = function(nums) {
    let numSet = [...new Set(nums)]
    return (nums.length>numSet.length?true: false)
}

// solution 2
var containsDuplicate = function(nums) {
    nums.sort()
    for (let i = 0 ; i < nums.length;i++){
        if (nums[i]== nums[i+1]){
            return true
        }
    }
    return false
};
