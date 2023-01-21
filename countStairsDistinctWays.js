https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
 
//few test cases will fail in this first approach
// var climbStairs = function(n) {
    
//   if(n ==0  || n==1){
//       return 1
//   }

//   return climbStairs(n-1)+ climbStairs(n-2)

// };

var climbStairs = function(n) {
   let ans = [1,2];
    
    for(let i = 2; i <n ; i++){
        ans[i] = ans[i-1] + ans[i-2];
    }
    return ans[n-1];
    
};   
