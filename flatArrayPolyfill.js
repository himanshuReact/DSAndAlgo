
// https://learnersbucket.com/examples/array/how-to-flat-an-array-in-javascript/
let arr = [[[1, [1.1]], 2, 3], [4, 5]]
const flatArr = (arr,result=[])=>{
    for(let i=0;i< arr.length;i++){
        if(Array.isArray(arr[i])){
            flatArr(arr[i],result)
        } else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(flatArr(arr))
//[1, 1.1, 2, 3, 4, 5]
