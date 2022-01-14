
// https://leetcode.com/problems/valid-anagram/

//not the very optimised solution though could be improved  passed all the cases

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let obj1 = {}
    let obj2 = {}
    
    if(s.length!==t.length){
        return false
    }
    
    for(let i in s){
        if( s[i] in obj1){
            obj1[s[i]]= obj1[s[i]]+1
        } else{
            obj1[s[i]] = 1
        }
    }
    
    for(let i in t){
        if( t[i] in obj2){
            obj2[t[i]]= obj2[t[i]]+1
        } else{
            obj2[t[i]] = 1
        }
    }
    
    for(let i in s){
        if(obj1[s[i]]!== obj2[s[i]]){
            return false
        }
    }
    return true 
};
