// max character
const max = (string) => {
  const characters = {};

  for (let character of string)
    characters[character] = characters[character] + 1 || 1;

  let maxCount = 0;
  let maxCharacter = null;

  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxCharacter = character;
    }
  }

  return maxCharacter;
};

// anagrams
// An obvious approach is to create a character map that tallies the number of characters for each input string. Then, we can compare the maps to see if they are identical. The logic that creates the character maps can be extracted as a helper function for easier reuse. To be thorough, we should first remove all non-alphabetic characters from the input strings and then make the remainder all lowercase.


