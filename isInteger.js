/**
* @param {number} num
* @return {boolean}
*/
    
/**
* Do not change this function body
* Do your changes within the function 
*/

// https://practice.learnersbucket.com/problems/check-if-integer
// Input:
// 4.0
// 12.2
// 0.3

// Output: 
// true
// false
// false


return function isInteger(num) {
  
  if(num <1){
  return false
  }
  else if(!num.toString().includes(".")){
  	return true
  }
  else{
	if(parseInt(num.toString().split(".")[1]) ==0){
    	return true
    }
    else{
    	return false
    }


}
  // your code goes here        
};
