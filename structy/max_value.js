// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

const maxValue = (nums) => {

    // create a variable x for comparison to current value in the array
    // set = -Infinity so that the first value compared is always larger than x
    let x = -Infinity;

    // Loop over the elements of the array
    for (let i = 0; i < nums.length; i++) {

        // Check to see if the value of the number located at the current index is greater than x
        // This should always be true on the first iteration
        if (nums[i] > x) {
          // If so, set x = to the value of that number
        x = nums[i];
      }
    }

    // After we've iterated through every number in the array, return the value of x
    // This will now be the value of the largest number in the array
    return x
};

console.log(maxValue([4, 7, 2, 8, 10, 9])); // -> 10

console.log(maxValue([10, 5, 40, 40.3])); // -> 40.3

// ^ Time and Space Complexity

// Time complexity for this problem (using a for() loop) is O(n) because we have to iterate over every element of the array, checking at each iteration to see if the value of that element is greater than x
// Space complexity is 0(1)
