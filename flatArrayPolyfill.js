
// https://learnersbucket.com/examples/array/how-to-flat-an-array-in-javascript/
// infinite depth by default
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


/// based on depth
let arr = [1,2,3,[3,4],[10,[7,8,[345]]]]
function flatten(arr, depth=1){
    let result = []
    arr.map((ar)=>{
        if(Array.isArray(ar) && depth>0){
            depth = depth -1;
            result.push(...flatten(ar,depth))
        } else{
            result.push(ar)
        }        
    })
    return result;
}
flatten(arr,4)
console.log(arr)
