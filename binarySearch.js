/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode.com/problems/binary-search/

var search = function(nums, target) {
    
    if(nums.length == 0){
        return -1
    }
    
    low = 0;
    high = nums.length -1
   
    
    while(low <= high){
        mid = Math.floor(low+(high-low)/2)
        console.log({mid})
        if(nums[mid]==target){
            return mid
        } else if(nums[mid]>target){
            high =mid-1
        } else{
            low =mid+1
        }  
    }
    return -1
    
};
