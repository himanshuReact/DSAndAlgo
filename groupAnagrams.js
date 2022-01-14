// https://leetcode.com/problems/group-anagrams/submissions/
// group anagrams  
// create object 
// find common key check value present for particular key if not then create array  aor else push in array

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let dict ={}
    for(let i in strs){
        let key = strs[i].split('').sort().join('')
        console.log(key)
        
        if(!dict[key]){
            dict[key]= [strs[i]]
        } else{
            dict[key].push(strs[i])
        } 
    }
    return Object.values(dict)   
};
