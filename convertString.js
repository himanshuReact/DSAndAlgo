  //convertString.js

  let str = "javascript"
  let k = 2

  let len = str.split('').length;
  let i =0
  let arr = []
  while(i < len){
	let res = str.slice(i,i+k)
    i = i+k
	arr.push(res)
	
	}
  
console.log(arr)
