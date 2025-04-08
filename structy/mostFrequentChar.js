// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {

    // First, we'll make a hash map of the letters in our strings
    // Keys will be the letters, values will be their count

    const count = {}; // initialize an object, which we'll use as our counter hash

    for (let char of s) {
        if (!(char in count)) { // If the current letter doesn't exist as a key in our counter hash
            count[char] = 0; // then add it and set its value to 0
        }

        count[char] += 1; // Then increment the value (count) of the current key (letter) by 1
    }

    console.log(count); // This should print our counter hash

    // Now that we have our count, we need to figure out which letter has the greatest count and then return it.
    // ALSO, if there are two letters with the same count, we should return the one that occurs earliest in the input string
    // To do this, we can start by initializing a 'most_frequent' variable and setting it to the first letter in the string by default
    // Then we can loop through the string again, checking our counter hash as we go to see if the current letter of the string is more frequent than the current 'most_frequent'
    // If so, then we replace it. At the end, we return 'most_frequent' which should be the letter that occurs most frequently in the word.

    let most_frequent = s[0];

    for (let char of s) {
        if (count[char] > count[most_frequent]) {
            most_frequent = char
        }
    }

    console.log(most_frequent);

    // This logic also ensures that we always capture the FIRST of any characters with the same max frequency because if we come across a letter that has the same frequency of...
    // ...our current most_frequent, we will not replace it. We only replace it if the count of the current letter is GREATER than the frequency of the current most_frequent
}

mostFrequentChar("apple");
mostFrequentChar("potato");
mostFrequentChar("banana")
