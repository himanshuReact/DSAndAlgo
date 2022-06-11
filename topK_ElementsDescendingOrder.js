/*
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

// https://bigfrontend.dev/problem/top-k-elements

function mergesort(arr) {
  if (arr.length > 1) {
    var mid = Math.floor(arr.length / 2)
    var l = arr.slice(0, mid)
    var r = arr.slice(mid, arr.length)
    console.log("l", l)
    console.log("r", r)
    mergesort(l)
    mergesort(r)
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < l.length && j < r.length) {
      if (l[i] < r[j]) {
        arr[k] = l[i]
        i++;
      } else {
        arr[k] = r[j]
        j++;
      }
      k++
    }
    while (i < l.length) {
      arr[k] = l[i]
      i++
      k++
    }
    while (j < r.length) {
      arr[k] = r[j]
      j++
      k++
    }
  }
}


function topK(arr, k) {
  // your code here
  mergesort(arr)
  if (arr.length ==0 || arr.length ==1) return arr
  let result = []
  for(let j = 0; j <k;j++){
    result.push(arr[arr.length-1 -j])
  }
  return result
}
