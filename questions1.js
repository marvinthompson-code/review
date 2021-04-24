// 1) isUnique
// Prompt:
// implement an algorithm to determine if a string has all unique characters.
// extra: what if you cannot use additional data structures?

// Brute force
// example: MARVIN
// loop through string
// make count object for each letter
// iterate through input
// check obj
// if letter >= 2, return false
// return true

// dot notation vs bracket notation for objects?

// const counterHelper = (s) => {
//     let count = {}
//     for (let i = 0; i < s.length; i++) {
//         if (count[s[i]]) {
//             count[s[i]] += 1
//         } else {
//             count[s[i]] = 1
//         }
//     }
//     return count
// }

// const isUnique = (s) => {
//     const count = counterHelper(s)
//     for (let i = 0; i < s.length; i++) {
//         console.log("current", count[s[i]])
//         if (count[s[i]] >= 2) return false
//     }
//     return true
// }

// isUnique("marviin")
// -----------
// 2) checkPermutation
// prompt: given two strings, write a method to decide if one is a permutation of the other.
// example inputs: "CAT", "TAC"
// example inputs: "CAT", "RAT"

// requires same length
// same letters
// make a counterObj for both A and B
// iterate through 1 and check the other to see if the value is the same
// if not, return false
// else return true

// const counterHelper = (s) => {
//     let count = {}
//     for (let i = 0; i < s.length; i++) {
//         if (count[s[i]]) {
//             count[s[i]] += 1
//         } else {
//             count[s[i]] = 1
//         }
//     }
//     return count
// }

// const checkPermutation = (stringA, stringB) => {
//     if (stringA.length !== stringB.length) return false
//     const aCounter = counterHelper(stringA)
//     const bCounter = counterHelper(stringB)
//     console.log(aCounter)
//     console.log(bCounter)
//     for (let letter in aCounter) {
//         console.log("current letter", letter)
//         if (bCounter[letter] !== aCounter[letter]) return false
//     }
//     return true
// }

// console.log(checkPermutation("cat", "tac"))
// -----------
// 3) URLify
// prompt
// write a method that replaces all spaces in a string with '%20'.
// you may assume that the string has sufficient space at the end to hold the additional characters.
// assume you are given the true length of the input sttring

// example string
// "Mr John Smith   ", 13
// output: "Mr20%John20%Smith"

// let example = "Mr John Smith";
// let example2 = "Mr John Smith   ";

//my 1st attempt
// const urlify = (str, limit) => {
//     let copy = ""
//     let newLength = limit
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == ' ') {
//             newLength += 2
//             copy += '%20'
//             console.log(newLength)
//         } else {
//             copy += str[i]
//         }
//     }

//     return copy
// };

// console.log(urlify(example2, 13))

// find out how many non space characters are in my string
// subtract from true length
// result is how many space we are allowed

// INPUT: String, int
// OUTPUT: String
// CONSTRAINTS: optimize
// EDGE CASES: EMPTY STRINGS, SPACES IN FRONT, MIDDLE, END

// My updated attempt:

// const urlify = (str, trueLength) => {
//   let copy = "";
//   let nonSpace = 0;
//   let spacesSeeen = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") nonSpace += 1;
//   }
//   let spacesAllowed = trueLength - nonSpace;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " " && spacesSeeen < spacesAllowed) {
//       copy += "%20";
//       spacesSeeen += 1;
//     } else {
//       copy += str[i];
//     }
//   }
//   return copy;
// };

// console.log(urlify(example2, 13));

// ------

//4 isPalindromePermutation
// given a string, write a function to check to see if it is a permutation of a palindrome. a palindrome is a word or phrase that is the same forwards and backwards. a permutation is a rearrangement of letteers. the palindrome does not need to be limited to just dictionary words. you can ignore casing and non letter characters.

