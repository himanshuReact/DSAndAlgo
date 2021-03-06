// //Find peak brute force approach 
// //https://leetcode.com/problems/find-peak-element/
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function(nums) {
    
//     let arr = nums;
    
//     if(arr.length ==1) return 0;
    
//     for(let i =0; i< arr.length; i++){
//         if((i ==0  && arr[i]> arr[i+1])|| (i==arr.length -1 && arr[i]> arr[i-1])){
           
//             return  i
//         }
//         else if((arr[i]> arr[i+1]   && arr[i]> arr[i-1])){
//             return i
//         }
//     }
//     return -1 
// };


//best optimise solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0; 
    let high = nums.length - 1;
    
    while (low < high) {
        console.log({low})
        console.log({high})
        let mid = Math.floor(low + (high - low) / 2);
        console.log({mid})
        
        if (nums[mid] < nums[mid + 1]) {
             low = mid + 1;
        } else {
              high = mid
        }
    }
    
    return low;
};
