// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

const longestWord = (sentence) => {
    const words = sentence.split(" ");
    // console.log(words);

    // Create variable to hold the longest word.
    // Set to null initially
    let word = null;

    for (let i = 0; i < words.length; i++) { // for each word in words

      // check to see if word is null
      if (word === null) {
        // If so, set 'word' to the value of the current word
        word = words[i]
      } else {
        // Otherwise, check to se if the length of the current 'word'
        // is shorter than the length of the word located at the current index of the array
        // OR is equal to the length of the word located at the current index of the array
          // ^ to account for two words that are the same length and make sure we keep the latter
        // If so, set 'word' equal to the length of the value located at the current index of the array
        if ((word.length < words[i].length) || (word.length == words[i].length)) {
          word = words[i]
        }
      }
    }
    return word;
  };

  console.log(longestWord("what a wonderful world")); // -> 'wonderful'
  console.log(longestWord("have a nice day")); // -> 'nice'
