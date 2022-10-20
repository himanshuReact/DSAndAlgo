//238. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let temp =1
    let n = nums.length
    let result=[]
    
    let prod = Array(n).fill(1)
    

    for(let i =0;i< n;i++){
        prod[i] = temp;
        temp=temp* nums[i];
    }
    
    temp =1
    
    for(let i=n-1;i>=0;i--){
        prod[i]=prod[i]* temp;
        temp= temp* nums[i]
    }
    
    
    return prod
 
    
};
