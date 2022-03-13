// https://practice.learnersbucket.com/problems/invert-key-value-object

/**
* @param {object{}} obj
* @return {object{}}
*/
    
/**
* Do not change this function body
* Do your changes within the function 
*/

// Input: obj = {"age": 12, "name": "xyz", "hairColor": "black"}
// Output: {"12": "age", "xyz": "name", "black": "hairColor"}

return function invert(obj) {
  // your code goes here   

let obj1={}
for(let key in obj){
    obj1[obj[key]] = key

}
 return obj1    
};
