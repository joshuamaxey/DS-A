// ! Problem 1

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 10^4
// -109 <= nums[i] <= 109


// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Example 3:
// Input = [2]
// Output = 2

input = [5, 5, 1, 1, 1, 5, 5]

// ^ This is an optimized strategy using Boyer-Moor Voting Algorithm

const majorityElement = nums => {
    let candidate = 0;
    let count = 0;

    for (let num of nums) {

        if (count === 0) { // if our count is zero, set our candidate equal to the current number
            candidate = num;
        }

        if (candidate === num) { // If the candidate equals the current number, increment our count
            count++;
        } else { // Otherwise, decrement our count
            count--;
        }
    }

    return candidate; // After we've iterated through the input, return the candidate that remains
}

// ! Problem 2

// https://leetcode.com/problems/longest-common-prefix/description/
// https://neetcode.io/problems/longest-common-prefix?list=neetcode250

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// * Examples

// Example 3:

// Input: strs = ["bat", "bag", "bank", "band"]
// Output: "ba"

// #xample 4:

// Input: strs = ["neet", "feet"]
// Output: ""

// ^ Approach

// Outer loop iterates over characters in the first word

// Inner loop iterates over remaining words while you check the character at the same index as the outer loop

// If they differ:
    // Then return the prefix
// Otherwise
    // Keep iterating, add the current character to the prefix

// Return the prefix at the end

longestCommonPrefix = strs => {
    let prefix = "";

    if (strs.length <= 1) return strs[0]; // if there is only ONE string in the input array, return the word

    for (let i = 0; i < strs[0].length; i++) {

        let char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            let newChar = strs[j][i];

            if (newChar !== char) return prefix;
        }

        prefix += char;
    }

    return prefix;
}

// ! Problem 3

// https://leetcode.com/problems/concatenation-of-array/description/
// https://neetcode.io/problems/concatenation-of-array?list=neetcode250

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// * Examples

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

// Constraints:

// n == nums.length
// 1 <= n <= 1000

// ^ Approach

nums = [1, 2, 1];

getConcatenation = nums => {
    let n = nums.length;

    let result = new Array(n * 2); // create new array of n * 2 length

    for (let i = 0; i < n; i++) {
        result[i] = nums[i];
        result[i + n] = nums[i];
    }

    return result;
}
