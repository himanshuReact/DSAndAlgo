//https://leetcode.com/problems/find-k-pairs-with-smallest-sums/


//first attempt 23/35 test cases passed

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let obj = {}
    for(let i = 0; i< nums1.length;i++){
        for(let j =0; j< nums2.length;j++){
            if(obj[nums1[i]+nums2[j]]){
                obj[nums1[i]+nums2[j]].push([nums1[i],nums2[j]])
            } else{
                obj[nums1[i]+nums2[j]] = [[nums1[i],nums2[j]]]
            }
        }
    }
    console.log(obj)
    let arr = Object.keys(obj)
    arr = arr.map(elem=> parseInt(elem))
    let sortedValues = arr.sort((a,b)=>a-b)
    console.log(sortedValues)
    let result = []

    for(let i of sortedValues){
        
        for(let j of obj[i] ){
            console.log(k)
            if(k>0){
                result.push(j)
                k--;
            }else{
                return result
            }
        }
    }
    return result

};
