# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug involving unexpected string concatenation when performing arithmetic operations with mixed data types.

## Bug Description
JavaScript's dynamic typing system can lead to unexpected behavior.  In this case, adding a number to a string results in string concatenation rather than numerical addition. This can be a source of subtle bugs that are hard to track down.

## How to reproduce
Clone the repository and run `bug.js`. The output will show the result of concatenating a number and a string rather than adding them numerically.

## Solution
The `bugSolution.js` file demonstrates how to avoid this issue by explicitly converting the string to a number using `parseInt()` or `parseFloat()` before performing the addition.