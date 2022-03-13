// https://practice.learnersbucket.com/problems/validate-indian-mobile-number

// Input: 
// '+919876543210'
// '+91 9876543210'
// '99876543210'
// '8953866525'

// Output:
// true
// true
// false
// true

return function validateMobileNumber(str) {
  // your code goes here 
  if(str.startsWith("+91") && str.length ==13){
    return true
} else if (str.startsWith("+91 ") && str.length ==14){
	return true
	} else if(str.length==10){
      return  true
} else if(str.startsWith("0") && str.length==11)
  	return true
  else{
	return false
}
};
