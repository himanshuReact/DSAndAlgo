
//https://leetcode.com/problems/plus-one/
// 71 / 111 test cases passed.
// partially correct

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length -1;
    
    let sum = 0
    let mul =1
    while(len>=0){
        sum = sum +digits[len]*mul
        mul=mul*10;
        len--;
    }
    
    sum = sum+1
    let sumStr = sum.toString();
    return sumStr.split('')
    
    
};
