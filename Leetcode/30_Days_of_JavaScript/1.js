// First LeetCode File

// 1. Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function () {

    return function (...args) {
        return "Hello World"
    }
}

// Assign the returned function to a variable
const helloWorldFunction = createHelloWorld();

// Call the returned function saved to the variable
console.log(helloWorldFunction());
