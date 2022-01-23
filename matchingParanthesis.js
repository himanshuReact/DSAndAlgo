/**
 * @param {string} s
 * @return {boolean}
 */
// https://leetcode.com/problems/valid-parentheses/

// output 67/91 testcases

var isValid = function(s) {
    // mid =Math.floor(s/2)
    let obj={ 
    '(':')',
    '{':'}',
    '[':']'
    }
    let arr =[];
    console.log(obj);
    
    for(let i =0; i< s.length;i++){
        console.log("****s[i]",s[i]);
        if(s[i] in Object.keys(obj)){
            arr.push(s[i]);
        }
        else{
            if(s[i+1]==obj[s[i]]){
                arr.pop(s[i]);
            } else{
                console.log(s[i+1],obj[s[i]]);
                return false;
            }
        }
    }
    return true
    
};
