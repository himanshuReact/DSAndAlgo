// Flattening of nested  json 
// vv imp


var dict = {'key1':1,'key2':{'key3':2,'key4':3,'key5':{'key6':4}}};
function flatten(obj, suffix, ans) {
  for (var x in obj) {
      var key;
      if (suffix != '')
        key = suffix + '.' + x;
      else
        key = x;
    if (typeof obj[x] === 'object') {
      flatten(obj[x], key, ans);
    } else {
      ans[key] = obj[x];
    }
  }
}
var obj = {};
flatten(dict, "", obj)
console.log(obj)



//{
//  key1: 1,
//  key2.key3: 2,
//  key2.key4: 3,
//  key2.key5.key6: 4
//}
