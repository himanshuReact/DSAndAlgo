// https://leetcode.com/problems/container-with-most-water/submissions/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let water = 0
    let left = 0
    let right = height.length -1
    
    while(left< right){
        
        water = Math.max(water, Math.min(height[left],height[right])*(right-left))
        if(height[left]> height[right]) right--;
        else{
            left++
        }
    }
    return water
};
