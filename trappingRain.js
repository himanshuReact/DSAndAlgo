/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/trapping-rain-water/


var trap = function(height) {
    
    let size = height.length
    
    let leftMax = Array(size)
    let rightMax = Array(size)
    leftMax[0] = height[0];
    rightMax[size-1] =height[size-1] ;
    
    let totalRain = 0;
    
    for(let i =1; i < size-1; i++){
        leftMax[i] = Math.max(height[i],leftMax[i-1])
    }
    
    for(let i= size-2; i>=0;i--){
        rightMax[i] = Math.max(height[i],rightMax[i+1])
    }
    for(let i=1; i< height.length-1;i++){
        
        totalRain += (Math.min(leftMax[i],rightMax[i])-height[i])
        
    }
    return totalRain
};
