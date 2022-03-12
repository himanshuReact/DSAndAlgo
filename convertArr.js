// https://learnersbucket.com/examples/array/chop-array-into-chunks-of-given-length/


const convertArr = (arr,size) =>{

let large = []
let index = 0
while(index< arr.length){
    let count =0
    let small = []
    while(count<size){
        small.push(arr[index++])
        count++
    }
    large.push(small)
}

console.log(large)
return large
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let size = 3
convertArr(arr,size)


//alternate prototype 

Array.prototype.chop = function(size){
    //temp array
    const temp = [...this];
    
    //if size is not defined
    if(!size){
      return temp;
    }  
  
    //output
    const output = [];
    let i = 0;
    
    //iterate the array
    while (i < temp.length) {
        //slice the sub-array of given size
        //and push them in output array
        output.push(temp.slice(i, i + size));
        i = i + size;
    }
  
    return output;
}
