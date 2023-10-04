function reverse(word){ 
  // "abc" => 'cba'
  // const wordArray =word.split("")  //creating an array from the inpåut string
  // const reversedWordArray = wordArray.reverse()  // reverse the array
  // const reversedWord = reversedWordArray.join("") //creating a strring from the reversed array
  // return reversedWord;                            //return the reversed string
  return word.split("").reverse().join("");     //same  process as line 3,4,5 just in one line

}

function isPalindrome(word) {
  // Write your algorithm here

  //reverse the input string
  const reversedWord = reverse(word)
  // if the input is the same as the reversed input
  if (word === reversedWord){
    //     return true
    return true
     // else
  }else{
    //   return false 
    return false
  }
  

}

/* 
  Add your pseudocode here

  that means the word is the same as the word in reverse, I shold return true

  reverse the input string

  if the input is the same as the reversed input
      return true
  else
    return false    

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
