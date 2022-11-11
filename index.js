function isPalindrome(word) {
  // Iterate over the word in reverse and save it to a new variable
  let reversedWord = ''
  for(let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i]
  }
  
  // Check to see if the reversed word matches the original word
  if(word === reversedWord) {
    return true
  }
  return false
}

/* 
  I need an isPalindrome function that takes in a lowercase string (with no spaces or speical characters) and returns true if it is the same forwards and backwards and returns false if not.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("teddy"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("z"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));
}

module.exports = isPalindrome;
