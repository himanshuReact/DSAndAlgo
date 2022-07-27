const getAnaGrams = (arr)=>{

    let obj= {}
    
    for(let i = 0;i< arr.length;i++){
        let key = arr[i].split("").sort().join("");
        if(obj[key]){
            obj[key].push(arr[i])
        } else{
            obj[key] = [arr[i]]
        }  
    }


    return Object.values(obj)
}

let arr = ["eat","tea","tan","ate","nat","bat"]

console.log(getAnaGrams(arr))
