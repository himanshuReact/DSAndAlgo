const getMaxCount =(str)=>{
  let obj = {};
  for(let i in str){
  	if(str[i] in obj){
    	obj[str[i]]+=1;
    }
    else{
    obj[str[i]] =1
    }
  }
  
  console.log(obj)
  
  let max = -1000;
  let maxIndex = 100
  
  
  for (let i in  obj){
  	if(obj[i]>max){
    	max = obj[i]
      maxIndex = i
    }
  
  }
  return maxIndex
}


str = "Hello Worldjjjjjjjjjj";
let result = getMaxCount(str)
console.log(`result : ${result}`)
