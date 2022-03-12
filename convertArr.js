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
