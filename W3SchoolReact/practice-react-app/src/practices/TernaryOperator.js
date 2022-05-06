// The ternary operator is a simplified conditional operator like if / else
//The Syntax: 
//condition ? <expression if true> 
//: <expression if false>

// an example using if / else (before using a ternary operator):
if (authenticated) {
    renderApp();
} else {
    renderLogin();
}

// using a ternary operator:
// ? if expression is true, : if false
authenticated ? renderApp() : renderLogin();