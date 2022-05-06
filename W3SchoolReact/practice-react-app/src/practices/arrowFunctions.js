// allow us to write shorter function syntax (compared to before e.g hello = function() {')
hello = () => {
    return "Hello World!";
}

// We can make it shorter
// If the function has only ONE statement, and the statement returns a value
// remove the curly brackets and the return keyword
hello = () => "Hello World!";


// Aarrow functions with parameters
hello = (val) => "Hello " + val;
// and if you only have one parameter, you can skip the parentheses as well
hello = val => "Hello " + val;