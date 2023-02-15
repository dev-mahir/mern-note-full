
// A palindrome number is a number that remains the same when its digits are reversed. In other words, it is a number that reads the same from left to right as it does from right to left. For example, 121, 11, 1221 are palindrome numbers.

var isPalindrome = function (x) {
  var num = x.toString().split("").reverse().join("");
  if (num == x) {
    return true
  } else { 
    return false
  }
};

console.log(isPalindrome(121));
