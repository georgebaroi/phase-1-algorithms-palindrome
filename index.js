function isPalindrome(word) {
  // Write your algorithm here
  const splitString = word.split("")
  const reverseString = splitString.reverse()
  const reJoin = reverseString.join("")
  if 
    (reJoin === word)
    return true 
    else
    return false 
  
}

/* 
  Add your pseudocode here
  make a function that takes in a string and returns true if palandrome and false if not
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
}

module.exports = isPalindrome;
