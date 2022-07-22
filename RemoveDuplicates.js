https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {

    let index = 0
    for(let i = 0; i< arr.length;i++){
        if(arr[index] != arr[i]){
            arr[++index] = arr[i]
            
        }
      
    }
    return ++index 

};
