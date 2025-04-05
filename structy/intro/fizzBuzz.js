// Write a function, fizzBuzz, that takes in a number n as an argument. The function should return an array containing numbers from 1 to n, replacing certain numbers according to the following rules:

// if the number is divisible by 3, make the element "fizz"
// if the number is divisible by 5, make the element "buzz"
// if the number is divisible by 3 and 5, make the element "fizzbuzz"

const fizzBuzz = (n) => {
    // Initialize an empty array to hold our return values
    // loop over numbers from 1 to n
    // At each iteration of the loop, add SOMETHING To the array
    // If i is divisible by 3 but NOT divisible by 5, add "fizz"
    // if i is divisible by 5 but NOT divisible by 3, add "buzz"
    // if i is divisible by both 3 AND 5, add "fizzbuzz"

    let arr = [];

    for (let i = 1; i <= n; i++) {
        if ((i % 3 !== 0) && (i % 5 !== 0)) arr.push(i); // if divisible by neither, push the number
        else if ((i % 3 === 0) && (i % 5 !== 0)) arr.push("fizz") // If divisible by only 3, push "fizz"
        else if ((i % 3 !== 0) && (i % 5 === 0)) arr.push("buzz") // If divisible by only 5, push "buzz"
        else if ((i % 3 === 0) && (i % 5 === 0)) arr.push("fizzbuzz") // If divisible by both, push "fizzbuzz"
    }

    return arr; // after the loop, return the array
}

console.log(fizzBuzz(10));
