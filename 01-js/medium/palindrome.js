/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let intialString = str.split(" ").join("").toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
  let lengthOfInitial = intialString.length;
  if(lengthOfInitial===1){
    return true;
  }
  // let revStr = [...str].reverse().join("").split(" ").join("").toLowerCase();
  // console.log(intialString);
  // console.log(revStr);
  // return intialString == revStr?true:false;
  for(let i  = 0;i<intialString.length;i++){
    if(intialString[i] != intialString[lengthOfInitial-i-1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
