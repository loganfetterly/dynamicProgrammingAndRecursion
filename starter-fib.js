/* This is a program that implements two forms of fibanacci sequences */

// Here is the implementation with time complexity of 2^n
// Parameters: n is index in the series we wish to find
function fib(n) {
    // Use a switch statement to return the first 3 indexes else do recursion as the default
    // CODE GOES HERE

    // Return the sum of the two fibanacci numbers that are behind it.
    // CODE GOES HERE

}

// Here is the implementation with linear time
// Parameters: n is index in the series we wish to find
function dynamicFib(n) {
    // if n already exists in the array return it
    // CODE GOES HERE

        // Use a switch statement to return the first 3 indexes
        // CODE GOES HERE

        // CRITICAL: SAVE THE VALUE IN THE DATA STRUCTURE
        // CODE GOES HERE

        // Return the value
        // CODE GOES HERE
}

var cache = [];
var comp = 40;

console.time('fib')
console.log(fib(comp));
console.timeEnd('fib')
console.time('dynamicFib')
console.log(dynamicFib(comp));
console.timeEnd('dynamicFib')