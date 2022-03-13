
// https://practice.learnersbucket.com/problems/reverse-words-string

// Input: "JavaScript is awesome"

// Output: "tpircSavaJ si emosewa"

return function reverse(str) {
  // your code goes here 
  let strList = str.split(" ")
  let strNew =strList.map(elem=> elem.split('').reverse().join(''))
  console.log(strNew)
  
  return strNew.join(" ")
};
