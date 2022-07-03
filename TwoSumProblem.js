/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// https://leetcode.com/problems/two-sum/


var twoSum = function(nums, target) {
    let obj = {};
    for(let i in nums){
        obj[nums[i]] = i   
    }
    console.log(obj)
    
    for(let i  in nums){
        let number = target - nums[i]
        if(number in obj && obj[number]!=i){
            return [i,obj[number]]
        }
    }
};
