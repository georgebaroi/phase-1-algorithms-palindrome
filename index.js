// function isPalindrome(word) {
//   // Write your algorithm here
//   const splitString = word.split("")
//   const reverseString = splitString.reverse()
//   const reJoin = reverseString.join("")
//   if 
//     (reJoin === word)
//     return true 
//     else
//     return false 
  
// }

isPalindrome = (word) =>{
  const reverse = word.split("").reverse().join("")
  return word === reverse 
}

/* 
  Add your pseudocode here
  make a function that takes in a string and returns true if palandrome and false if not
*/

/*
  Add written explanation of your solution here
  i wanted to use the .reverse built in method but we can only call that on arrays 
  I used the .split method bc that separates a string into individual arrays
  I used .reverse on the split string 
  now to join it back together to a string using the .join built in of js 
  if the rejoined string is equal to word we have a palandrome and return true
  if not then its not a palandrome and false 

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
