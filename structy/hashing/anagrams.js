// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {

    // First, we want to generate a hash map of s1 using an object
    // Here, we will map each character in s1 to its 'count' (how many times it appears in the string)
    const count = {}; // this will hold the letters of our first string and their counts

    for (let char of s1) { // us a for OF loop to iterate over VALUES (for/in loops iterate over KEYS, like in objects)

        if (!(char in count)) { // check to see if 'char' is already a key in count
            count[char] = 0; // if not, add the key (letter) and set its value (count) to -0
        }

        count[char] += 1; // Increment the value (count) of the key (letter) in our count object (hash map)
    }

    // console.log(count); // This will print our hash map of the first word provided as an argument (s1)

    // Next, we COULD generate a hash map of the second string and compare the two count objects
    // Except that in JavaScript, we cannot directly compare objects to one another using comparison operators
    // This is because JS will not compare their keys/values, but their locations in memory
    // SO even if the two objects are identical, we will return a FALSE upon comparing them.

    // So instead, what we can do is loop over the second string using another for/of loop
    // For each character, we will check to see if it exists in count (like we did in the conditional within the first loop)
    // But this time, we will DECREMENT the count of the letter if it does exist.
    // That way, if we have the same letters in both words, our counts for all of the letters in our count object will be "0" at the end of the loop
    // If we find that a letter in s2 is NOT present in s1, then we can immediately return false because then they cannot be anagrams

    for (let char of s2) {
        if (char in count) {
            count[char] -= 1;
        } else {
            return false
        }
    }

    // Finally, once we've finished both of our loops, we can use a for/in loop to iterate through our count object,
    // checking to make sure that the count (value) for each letter (key) is 0.
    // If the counts for any of the letters are greater than or less than 0, then the words are not anagrams and we return false

    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    // And if we pass all of our loops without ever returning a false, then we can return true because we know the words must be anagrams👍
    return true;
}

// Note the time complexity here is O(n + m)
// At first glance, we might see three loops and assume the complexity is O(3n), which simplifies to O(n)
// BUT we have to consider that s1 and s2 could have different lengths.
// So the time complexity of our first loop (iterates over s1) is O(n) where n is the length of s1
// the complexity of our second loop (iterates over s2) is O(m) where m is the length of s2
// And the time complexity of our third loop is O(n) again, because our count objects was initialized based on the length of s1
// So we have an overall time complexity of O(n + m + n), or O(2n + m)
// And after we simplify this complexity by removing the 2 (constant factor), we are left with O(n + m)

anagrams("restful", 'fluster');
anagrams('apple', 'happy');
