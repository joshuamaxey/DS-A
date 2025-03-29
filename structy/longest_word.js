// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

const longestWord = (sentence) => {
    const words = sentence.split(" ");

    // Create variable to hold the current longest word
    // Set initially to null
    let word = null;

    for (let i = 0; i < words.length; i++) { // for each word in words

        // Check to see if word is null
        if (word == null) {
            // If so, set the value of 'word' to the value of the word at the current index of the array
            word = words[i];
        } else {
            // Otherwise, check tosee if the length of the current word is shorter than the word located at the current index of the array
            // OR if it is equal to the length of the word located at the current index of the array
                // ^ To account for two words that are the same length, making sure we keep the latter of the two
            // If so, set 'word' equal to the word located at the current index of the 'words' array
            if ((word.length < words[i].length) || (word.length == words[i].length)) {
                word = words[i]
            }
        }
    }

    return word;
}

console.log(longestWord("what a wonderful world")); // -> 'wonderful'
console.log(longestWord("have a nice day")); // -> 'nice'

// ! Alternatively:

// Set 'word' to an empty string initially
// This will eliminate the need for the initial conditional used above
// For checking to see if the word is set to 'null'

const longestWord2 = (sentence) => {
    const words = sentence.split(" ");

    let word = "";

    for (let i = 0; i < words.length; i++) {
        if ((word.length < words[i].length) || (word.length == words[i].length)) {
            word = words[i]
        }
    }

    return word;
}

console.log(longestWord2("what a wonderful world")); // -> 'wonderful'
console.log(longestWord2("have a nice day")); // -> 'nice'


// ! Alvin's Solution:

const longestWord3 = (sentence) => {

    const words = sentence.split(" ");
    let longest = "";

    for (let word of words) { // use a FOR OF loop here
        if (word.length >= longest.length) { // Use the >= operator to check for greater than OR equal to at the same time
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord3("what a wonderful world")); // -> 'wonderful'
console.log(longestWord3("have a nice day")); // -> 'nice'
