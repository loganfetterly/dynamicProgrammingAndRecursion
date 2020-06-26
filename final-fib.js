/* This is a program that implements two forms of fibanacci sequences */

// Here is the implementation with time complexity of 2^n
// Parameters: n is index in the series we wish to find
function fib(n) {
    funcCallsFib += 1;
    // Use a switch statement to return the first 3 indexes else do recursion as the default
    switch (n) {
        case 0:
          return 0;
        case 1:
            return 1;
        case 2:
            return 1;
        default:
            // Return the sum of the two fibanacci numbers that are behind it.
            return (fib(n-1) + fib(n-2));
    }
}

// Here is the implementation with linear time
// Parameters: n is index in the series we wish to find
function dynamicFib(n) {
    funcCallsDynamicFib += 1;
    if (cache[n]) {
        return cache[n];
    } else {
         // Use a switch statement to return the first 3 indexes
        switch (n) {
            case 0:
              return 0;
            case 1:
                return 1;
            case 2:
                return 1;
            default:
                // CRITICAL: SAVE THE VALUE IN THE DATA STRUCTURE
                num = dynamicFib(n - 1) + dynamicFib(n - 2);
                cache[n] = num;
                // Return the value
                return num; 
        }
    }
}

var cache = [];
var comp = 40;
var funcCallsFib = 0;
var funcCallsDynamicFib = 0;

console.log("We are going to find the Fib numbers for: " + comp);
console.log("Solving with time complexity O(2^n)..");

console.time('fib')
console.log(fib(comp) + " found with " + funcCallsFib + " function calls.");
console.timeEnd('fib')

console.log("Solving with time complexity O(n)..");
console.time('dynamicFib')
console.log(dynamicFib(comp) + " found with " + funcCallsDynamicFib + " function calls.");
console.timeEnd('dynamicFib')