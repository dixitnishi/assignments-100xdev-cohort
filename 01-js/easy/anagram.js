/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!==str2.length){
    return false;
  }
  let str1Temp = str1.toLowerCase();
  let str2Temp = str2.toLowerCase();
  for(let i = 0;i<str1Temp.length;i++){
    if(!(str2Temp.includes(str1Temp[i]))){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
