// Write a function, pairs, that takes in an array as an argument. The function should return an array contain all unique pairs of elements.

// You may return the pairs in any order and the order of elements within a single pair does not matter.

// You can assume that the input array contains unique elements.

const pairs = (elements) => { // 'elements' will be an array

    // We want to return a 2-D array containing all UNIQUE pairs of elements from the input array with NO duplicates
    // First, create an empty array to hold our pairs
    // To construct the 2-D array, we will use a nested loop
    // To make sure our pairs are unique and without duplicates. the inner loop will start at the outer loop's index (i) + 1
    // Inside of the inner loop, we will construct each pair [i, j]
    // Then we will push that pair to our outer array
    // Finally, after the loop completes, we will return the 2-D array

    let arr = [];

    for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
            let pair = [elements[i], elements[j]];
            arr.push(pair);
        }
    }

    return arr;
}

console.log(pairs(["a", "b", "c", "d"]))

// Note that our time complexity here is O(n^2) as a consequence of the nested loop.
// Because we're also creating a new array with the elements added from both loops, our time complexity is also O(n^2)
