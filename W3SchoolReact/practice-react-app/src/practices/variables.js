// If you use var outside of a function, it belongs to the global scope
// If you use var inside of a function, it belongs to that function
// If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block

// var, let, const
var x = 5.6;
// let is the block scoped version of var, and is limited to the block (or expression) where it is defined. If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
let x = 5.6;
// const is a variable that once it has been created, its value can never change
const x = 5.6;