// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

// ! 1st Attempt:

const isPrime = (n) => {
    // Check to see if the number is prime
    // A prime number is ONLY (evenly) divisible by 1 and itself

    // So we need to...
    // Check for possible divisors
    // All the way from 2 => (n - 1)

    // If it is divisible by any numbers from 2 to n-1, it is not prime
    // If it is NOT divisible by any number from 2 - n-1, it IS prime

    // So first, we will iterate over every number from 2 to n-1
    // First, check to see if n === 1. If so, return true.
    if (n === 1) return false;

    for (let i = 2; i < n; i++) {
        // If n is not 1...
        // Check to see if n is evenly divisible by the number
        // located at the current index of the array
        if (n % i === 0) {
            // If it IS divisible by this number, return FALSE
            // Because it is not a prime number
            return false;
        }
    }
    // If we finish the entire loop and n was NOT divisible by any of the numbers
    // Return true because n is a prime number
    return true;
}

console.log(isPrime(2)); // -> true
console.log(isPrime(6)); // -> false
console.log(isPrime(7)); // -> true

// ! Alvin's Solution:

const isPrime2 = (n) => {

    if (n < 2) return false; // 2 is the smallest prime number

    for (let i = 2; i < Math.sqrt(n); i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    // ^ Note that our for() loop has a linear time complexity [ O(n) ]
    // We can improve the time complexity here by checking from 2 to the SQRT of n, instead of all the way up to n itself

    return true;
}

console.log(isPrime2(2)); // -> true
console.log(isPrime2(6)); // -> false
console.log(isPrime2(7)); // -> true

console.log(Math.sqrt(9)) => 3
