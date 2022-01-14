// best-time-to-buy-and-sell-stock

//  all scenarios completed in one go
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let a = prices
    let min = a[0]
    let profit = 0
    for(let i =1; i < a.length; i++){
        if(a[i]<min){
            min = a[i]   
        }
        if(profit < a[i]-min){
            profit = a[i]-min
        }  
    }
    return profit  
};
