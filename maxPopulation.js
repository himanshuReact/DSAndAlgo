// https://leetcode.com/problems/maximum-population-year/
// 1854. Maximum Population Year
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let year = {}
    for(let i =0; i < logs.length;i++){
        for(let j = logs[i][0];j<= logs[i][1]-1;j++){
            if(j in year){
                year[j] = year[j]+1
            } else{
                year[j] =1
            }
        }
    }
    
    
    let maxVal =-100
    let y = -1000
    for(let i in year){
        if(year[i]> maxVal){
            maxVal = year[i]
            y = i
        }
    }
    return y
};
