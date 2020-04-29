// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1) With .reverse:
// function palindrome(str) {
//   return str.split('').reverse().join('') === str;
// }

// 2) Without .reverse:
function palindrome(str) {
  const reversed = str.split('').reduce((rev, char) => char + rev, '')
  return reversed === str;
}

module.exports = palindrome;
