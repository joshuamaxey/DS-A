// ! PROBLEM 1

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//  Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

// ?

// we want to keep track of the numberOfWaysDP

// If we're on the n - 1 stair, there is only ONE way to get to the n stair. One step, once.
// Same is true if we're already on the n stair.

// So if n = 5, and we are on step 5, there is only ONE way to get to the target. Casue we're already there.
// And if current = 4 when n = 5, there is only ONE way to get to the target. One step.

// If we are on step 3, there are two options. Take one step to 4th stair, or 2 steps to the 5th stair.
// And if we're on the 4th stair, we already know there's only 1 way to reach the 5th stair (covered in line 34)
// Sme is true if we're on the 5th stair, there's only 1 way to get to the final stair (cause we're already there)

let numWays = [8, 5, 3, 2, 1, 1];
         //    0  1  2  3  4  5

// ? Algorithm

numWays[i] = numWays[i + 1] + numWays[i + 2]

// ? Approach

// 1. Create a DP table using an array, size of table is n + 1
// 2. Fill in our base cases starting the top of the staircase (n and n + 1)
// 3. Iterate down to zero starting at n - 2, and decrement down to 0
    // a. Fill in our table using the formula to get the number of ways based on a double-jump or a single jump (either [i + 1] or [i + 2])
// 4. Return the number located at index 0 of the DP table

const climbStairs = n => {
    numWays = new Array(n + 1);
    numWays[n] = 1; // 1 way to reach n if we are already at n
    numWays[n - 1] = 1; // 1 way to reach n if we are at n - 1

    for (let i = n-2; i >= 0; i--) { // start iterating at i - 2, time complexity O(n)

        let singleJump = numWays[i + 1];
        let doubleJump = numWays[i + 2];

        numWays[i] = singleJump + doubleJump;
    }

    return numWays[0];
}

// ! PROBLEM 2

// Robber Problem I
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

// ?

// So we can either rob the first house, skip the next, and then rob the rest
// OR we can skip the first house and rob the rest of the houses
// Because the first house is the ONLY one with the security system-- all other houses can be robbed even if they're right next to one another

// So if we have houses = [1, 2, 3, 4]
// We can either rob 1, 3, and 4
// OR we can skip 1 and rob 2, 3, and 4.

// rob = max(houses[0] + rob[2:n], rob[1:n])

// ?

let nums = [1, 2, 3, 1] // input array, each number representing a house. The higher the number, the wealthier the house

let maxWeCanRob = [_, _, _, _,]
//                 0  1  2  3

// ? What is our base case?

// So we want to know what is the MAX amt we can rob up to the final index

maxWeCanRob[i] = MAX(maxWeCanRob[i - 1], maxWeCanRob[i - 2] + houses[i]) // ? Formula

// ? Approach

// 1. Create a table using an array that is the size of the input
// 2. Set up base cases on the table
    // a. maxWeCanRob[0] = houses[0];
    // b. maxWeCanRob[1] = MAX(houses[0], houses[1])
// 3. Iterate over our houses
    // a. Fill in the table using the formla from line 117
// 4. Return maxWeCanRob[maxWeCanRob.length - 1]

const rob = houses => {

    const maxWeCanRob = new Array(houses.length);

    if (houses.length === 1) { // if there's only one house, return the value of that house
        return houses[0];
    }

    maxWeCanRob[0] = houses[0];
    maxWeCanRob[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < nums.length; i++) {
        const skipCurrentHouse = maxWeCanRob[i-1]; // Don't rob the current house, keep current loot
        const robCurrentHouse = maxWeCanRob[i - 2] + houses[i]; // OR rob the current house and add it to the non-adjacent houses

        maxWeCanRob[i] = Math.max(skipCurrentHouse, robCurrentHouse);
    }

    return maxWeCanRob[maxWeCanRob.length - 1];
}
