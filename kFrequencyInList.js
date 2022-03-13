/**
* @param {any []} arr
* @param {number} k
* @return {any}
*/
    
/**
* Do not change this function body
* Do your changes within the function 
*/

// https://practice.learnersbucket.com/problems/element-k-frequency

return function kFrequency(arr, k) {
  // your code goes here        
  let obj = {}
  for(let i in arr){
	if(obj[arr[i]]){
	obj[arr[i]] = obj[arr[i]]+1
    }
    else{
		obj[arr[i]] =1
	}
	}
  
  for(let key in obj ){
	if(obj[key] ==k){
	return key
	}
}
  return -1
  
};
