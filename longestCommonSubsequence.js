/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//https://leetcode.com/problems/longest-common-subsequence/submissions/


var longestCommonSubsequence = function(text1, text2) {
    
    l1 = text1.length;
    l2 = text2.length;
    
    // let dp = new Array(l1)
    
    const dp = [...Array(l1+1)].map(() => Array(l2+1).fill(0));
    console.log(dp)
    
    for(let i=1; i<=l1;i++ ){
        for(let j=1; j<=l2;j++){
            if(text1[i-1]==text2[j-1]){
                dp[i][j] = 1+dp[i-1][j-1]
            }
            else{   
                dp[i][j] =Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    console.log(dp)
    return dp[l1][l2]
};
