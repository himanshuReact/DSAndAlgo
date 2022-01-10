//https://leetcode.com/problems/reverse-integer/submissions/

var reverse = function(x) {
    let ans = x < 0 ? 
        parseInt(Math.abs(x).toString().split('').reverse().join('')) * -1
        :
        parseInt(x.toString().split('').reverse().join(''))
    return Math.abs(ans) < Math.pow(2,31) ? ans : 0;
};
