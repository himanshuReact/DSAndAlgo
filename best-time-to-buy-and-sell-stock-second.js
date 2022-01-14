
// best-time-to-buy-and-sell-stock-ii
// partially correct 94/200 correct

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let a = prices
    let min = a[0]
    let profit = 0
    for(let i = 1; i < prices.length; i++){
        
        if(a[i]< min){
            min = a[i]
        }
        console.log("min",min)
       
        if(a[i]>a[i-1] && a[i]>a[i+1]  ){
            console.log("a[i]",a[i])
           
            profit =profit + a[i]-min
            min = a[i+1]
            console.log('profit',profit)
        } 
       
    }
    if(a[a.length]<min){
         profit =profit + a[a.length] - min
    }
   
    return profit
};
