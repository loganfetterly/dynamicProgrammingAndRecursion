/* This is a program that implements two forms of fibanacci sequences */

// Here is the implementation with time complexity of 2^n
// Parameters: n is index in the series we wish to find
function fib(n) {
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

console.time('fib')
console.log(fib(comp));
console.timeEnd('fib')
console.time('dynamicFib')
console.log(dynamicFib(comp));
console.timeEnd('dynamicFib')