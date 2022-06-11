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

let arr = [5,3,2,7,1,9]
mergesort(arr)
