/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length ==0){
        return [-1,-1]
    }
    
    
   let key = target;
   let low = 0;
   let high = nums.length
   return result = searchBinary(nums, key, low, high)
}




/// partial out put 25/80 test cases passed
//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
function searchBinary(arr, key, l,h){
     while(l<h){
        console.log(l,h)
        let mid= Math.floor((l+h)/2)
        let j = mid;
        let res = []
        if(arr[j]==key){
            console.log("j is",j)
            
            while(arr[j]==key){
                console.log("j +is",j)
                res.push(j);
                j++;
            }   
            let max = j-1
            j= mid-1
            while(arr[j]==mid){
                console.log("j - is",j)
                res.push(j);
                j--; 
            }
            let min =j+1
            
            return [min,max] 
        }
        else if(arr[mid] >= key){
            searchBinary(arr,key,l,mid-1)
        } else{
            
            searchBinary(arr,key,mid+1,h)
        }
          return [-1,-1]
         
    }    
}
