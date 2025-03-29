// 2. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// The key elements of a CLOSURE are the OUTER FUNCTION and the INNER FUNCTION.
// In a CLOSURE, the INNER FUNCTION has access to the variables in the OUTER FUNCTION, even after the outer function has finished executing.
// This allows us to preserve the scope of the OUTER FUNCTION so that its variables don't disappear.

const createCounter = function (n) {

    return function () {
        return n++
    }
}

const numberCounter = createCounter(5);

console.log(numberCounter()); // 5
// Note that the reason 5 is returned first (even though we have the ++ increment on the variable) is because the ++ comes AFTER the variable
// This is called a 'Post-Increment', wherein we return the count of n, THEN increment it.
console.log(numberCounter()); // 6
console.log(numberCounter()); // 7

// So in summary, CLOSURE allows our inner funciton to access the variable that is provided through the OUTER function
// And the reason that our variable (in this case, 5) return unchanged is because we used POST-INCREMENT syntax to ensure that we return the variable BEFORE incrementing it.
